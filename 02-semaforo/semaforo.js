const semaforo = document.querySelector('#semaforo')
const botoes = document.querySelector('.botoes')

var interv
var index = 0

const Verificacao = (event) => {
    stop()
    estados[event.target.id]()
}

const nextIndex = () => index = index < 2 ? ++index : 0;

const automatic = () => {
    const colors = ['vermelho', 'amarelo', 'verde']
    estados[colors[index]]()
    nextIndex()
    console.log(index)
}

const estados = {
    "vermelho": () => semaforo.src="img/vermelho.png",
    "amarelo":  () => semaforo.src="img/amarelo.png",
    "verde":    () => semaforo.src="img/verde.png",
    "auto":     () => interv = setInterval(automatic, 1000)
}

const stop = () => {
    clearInterval(interv)
}

botoes.addEventListener("click", Verificacao)