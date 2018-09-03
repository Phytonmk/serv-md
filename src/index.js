const mathToPicUrl = 'http://www.sciweavers.org/tex2img.php?bc=White&fc=Black&im=jpg&fs=12&ff=arev&eq='

const portUsed = require('port-used')
const opn = require('opn')
const colors = require('colors')
const path = require('path')
const fs = require('fs-extra')
const ws = require("nodejs-websocket")
const showdown = require('showdown')
const md = new showdown.Converter()
const chokidar = require('chokidar')
const express = require('express')

let fileName = '',
encoding = 'utf-8',
port = 1122,
openBrowser = false,
noMath = false
for (let i in process.argv) {
  const arg = process.argv[i]
  if (arg.includes('.md') || arg.includes('.markdown')) {
    fileName = arg
  }
  if (arg === '--encoding') {
    encoding = process.argv[i + 1]
  }
  if (arg === '--port') {
    port = process.argv[i + 1]
  }
  if (arg === '--open') {
    openBrowser = true
  }
  if (arg === '--no-math') {
    noMath = true
  }
}

var net = require('net');

// const portInUse = (port) => new Promise((resolve, reject) => {
//   console.log(`Checking if port ${port} not in use...`)
//   const server = net.createServer((socket) => {
//     socket.write('Echo server\r\n')
//     socket.pipe(socket)
//   })
//   server.listen(port, 'localhost')
//   server.on('error', (e) => {
//     console.log(`Port ${port} in use`)
//     resolve(true)
//   });
//   server.on('listening', (e) => {
//     if (e) {
//       console.log(`Port ${port} in use`)
//       resolve(true)
//     } else {
//       console.log(`Port ${port} is free`)
//       server.close()
//       resolve(false)
//     }
//   });
// })
const isFreePort = port => new Promise((resolve, reject) => {
  portUsed.check(port, 'localhost')
    .then((inUse) => {
      resolve(!inUse)
      // console.log('Port 44201 usage: '+inUse);
    }, (err) => {
      reject()
      // console.error('Error on check:', err.message);
    });
})

const app = express()
// app.get('/', (req, res) => res.end('hello'))
let wsServer;
(async () => {
  while (!await isFreePort(port)) {
    port++
  }
  let wsPort = (port.toString() + '1') * 1
  while (!await isFreePort(wsPort)) {
    wsPort++
  }
  app.get('/port', (req, res) => {
    res.send(wsPort.toString())
    res.end()
  })
  app.use('/', express.static(path.join(__dirname, '/../front-dist')))
  app.listen(port, () => console.log(`\nserver started on `.yellow + `localhost:${port}`.underline.cyan))
  if (openBrowser)
    opn(`http://localhost:${port}`)
  wsServer = ws.createServer((connection) => {
    connection.on("error", () => {})
    update(connection)
  }).listen(wsPort)
})()

if (fileName.length === 0) {
  process.exit()
}
if (fileName[0] !== '.')
  fileName = './' + fileName

const baseName = path.basename(fileName)


let fileTextToOverwrite = ''

setInterval(() => {
  if (fileTextToOverwrite != '')
    fs.ensureFile(fileName)
      .then(() => {
        if (fileTextToOverwrite != '') {
          fs.writeFileSync(fileName, fileTextToOverwrite, {encoding})
          fileTextToOverwrite = ''
        } 
      })
      .catch(() => {})
}, 100)

const update = async (forConnection=false) => {
  if (!wsServer)
    return
  const send = msg => {
    msg = JSON.stringify(msg)
    if (forConnection)
      forConnection.sendText(msg)
    else
      wsServer.connections.forEach((conn) => {
        conn.sendText(msg)
      })
  }
  let markdownText = ''
  markdownText = await fs.readFile(fileName, encoding)
    .catch((e) => {
    })
  if (markdownText === undefined) {
    markdownText = ''
    await fs.writeFile(fileName, markdownText, {encoding})
  }
  const lines = markdownText.split(/\n/)
  let formulasPicturesInserting = false
  if (!noMath) {
    for (let i in lines) {
      if (lines[i][0] === '%' && lines[i].length > 1 && lines[i - 1] !== undefined && lines[i - 1].replace(/[\s\n\r\t]/g, '') === '' && (lines[i + 1] === undefined || lines[i + 1].replace(/[\s\n]/g, '') === '')) {
        lines[i] = `![math formula](${mathToPicUrl + lines[i].substr(1)})`
        formulasPicturesInserting = true
      }
    }
  }
  const html = markdownText !== '' ? md.makeHtml(lines.join('\n')) : ''
  // console.log(html)
  const msg = {
    type: 'html-update',
    html,
    fileName: baseName
  }
  send(msg)
  if (formulasPicturesInserting)
    fileTextToOverwrite = lines.join('\n')
}

const watcher = chokidar.watch(fileName)
watcher.on('change', () => update())

const connections = []

update()