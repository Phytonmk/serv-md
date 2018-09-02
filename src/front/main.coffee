url = "ws://localhost:11221"

adjectives = ['divine', 'famous', 'superb', 'magnificent', 'beautiful', 'great', 'delightful',
'illustrious', 'adored', 'splendid', 'outstanding', 'heroic', 'sublime', 'wonderful', 'triumphant',
'brilliant', 'gorgeous', 'shining', 'dazzling', 'enjoyable', 'remarkable', 'gratifying', 'noble',
'grand', 'marvelous', 'memorable', 'bright', 'pleasurable', 'elevated', 'notable', 'exalted',
'distinguished', 'noted', 'venerable', 'radiant', 'eminent', 'preeminent', 'heavenly', 'effulgent',
'fine', 'majestic', 'honored', 'excellent', 'august', 'celebrated', 'renowned', 'resplendent', 'famed', 'immortal']
adjective = document.querySelector('#adjective')
adjective.innerHTML = adjectives[Math.floor(Math.random() * adjectives.length)]

content = document.querySelector('#markdown')
title = document.querySelector('title')
fileName = document.querySelector('#file-name')
fileUpdate = document.querySelector('#file-update')
connected = false
setInterval ->
  if !connected
    socket = new WebSocket url
    socket.onopen = ->
      connected = true
    socket.onclose  = (event) ->
      connected = false
    socket.onmessage = (rawMsg) ->
      msg = JSON.parse(rawMsg.data)
      if msg.type == 'html-update'
        content.innerHTML = msg.html
        title.innerHTML = msg.fileName
        fileName.innerHTML = msg.fileName
        date = new Date()
        hours = date.getHours()
        minutes = date.getMinutes()
        seconds = date.getSeconds()
        if (hours < 10)
          hours = '0' + hours
        if (minutes < 10)
          minutes = '0' + minutes
        if (seconds < 10)
          seconds = '0' + seconds
        fileUpdate.innerHTML = hours + ':' + minutes + ' ' + seconds
,
 50

