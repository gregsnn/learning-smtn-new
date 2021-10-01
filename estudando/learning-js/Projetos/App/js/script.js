// screen
let height = 0
let width = 0
let vidas = 1
let tempo = 6
let mosqTempo = 1500

let nivel = window.location.search
nivel = nivel.replace(/\?/gi, '')

(nivel === 'normal') ? mosqTempo = 1500 : '' || (nivel === 'dificil') ? mosqTempo = 1000 : '' || (nivel === 'hardcore') ? mosqTempo = 750 : ''

function adjustSizeGame() {
  height = window.innerHeight
  width = window.innerWidth
}
adjustSizeGame()

// mosquito
function randomPosition() {
  // remover mosq (caso exista)
  if (document.getElementById('mosquito')) {
    document.getElementById('mosquito').remove()

    vidas > 3 ? window.location.href = './gameOver.html' : ''
  
    document.getElementById('v' + vidas).src = '.././assets/img/coracao_vazio.png'
    vidas++
  }

  let positionX = Math.floor(Math.random() * width) - 100
  let positionY = Math.floor(Math.random() * height) - 100
  positionX = positionX < 0 ? 0 : positionX
  positionY = positionY < 0 ? 0 : positionY

  const mosq = document.createElement('img')
  mosq.src = '.././assets/img/mosca.png'
  mosq.className = `${randomSize()} ${randomSideMosq()}`
  mosq.id = 'mosquito'
  mosq.onclick = function() {
    this.remove()
  }
  mosq.style.left = positionX + 'px'
  mosq.style.top = positionY + 'px'
  mosq.style.position = 'absolute'

  document.body.appendChild(mosq)
}

// tamanho mosquito
function randomSize() {
  let mosqClass = Math.floor(Math.random() * 3) + 1
  
  switch(mosqClass) {
    case 1:
      return 'mosq1'
    case 2:
      return 'mosq2'
    case 3:
      return 'mosq3'
  }
}

// upside down
function randomSideMosq() {
  let mosqSide = Math.floor(Math.random() * 2) + 1
  
  switch(mosqSide) {
    case 1:
      return 'sideA'
    case 2:
      return 'sideB'
  }
}

// interval
const mosqCreate = setInterval(function() {
  randomPosition()
}, mosqTempo)

const cronometro = setInterval(function () {
  tempo -= 1

  tempo <= 0 ? `${clearInterval(cronometro)} ${clearInterval(mosqCreate)} ${window.location.href = './victory.html'}` : ''

  document.getElementById('cronometro').innerHTML = tempo
}, 1000)