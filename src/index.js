const mathToPicUrl = 'http://www.sciweavers.org/tex2img.php?bc=White&fc=Black&im=jpg&fs=12&ff=arev&eq='

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

const app = express()
app.use('/', express.static(path.join(__dirname, '/../front-dist')))
// app.get('/', (req, res) => res.end('hello'))
app.listen(port, () => console.log(`\nserver started on `.yellow + `localhost:${port}`.underline.cyan))
if (openBrowser)
  opn(`http://localhost:${port}`)

if (fileName.length === 0) {
  process.exit()
}
if (fileName[0] !== '.')
  fileName = './' + fileName

const baseName = path.basename(fileName)

const server = ws.createServer((connection) => {
  connection.on("error", () => {
    //console.log("Connection closed")
  })
  update(connection)
}).listen(11221)


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
  const send = msg => {
    msg = JSON.stringify(msg)
    if (forConnection)
      forConnection.sendText(msg)
    else
      server.connections.forEach((conn) => {
        conn.sendText(msg)
      })
  }
  const markdownText = await fs.readFile(fileName, encoding)
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
  const html = md.makeHtml(lines.join('\n'))
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