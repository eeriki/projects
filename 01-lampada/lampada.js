const imagem = document.querySelector("#lamp")
const botoes = document.querySelector(".botoes")
const rest = document.getElementById("restaurar")

var limite = 5
var clique = 0
var state = 'off'

const VerificarId = (element) => {
    estado[element.target.id]()
}

const Quebrar = () => {
    const quebra = ++clique == limite ? true : false;
    if(quebra)
    {
        estado['quebrada']()
        clique = 0
    }
    
}

const Restaurar = () => {
    imagem.src = 'img/desligada.jpg'
    state = 'off'
}

const estado = {
    "ligada": () => {
        if(state != 'broken'){
            imagem.src = 'img/ligada.jpg'
            state = 'on'
        }
    },
    "desligada": () => {
        if(state != 'broken'){
            imagem.src = 'img/desligada.jpg'
            state = 'off'
        }
    },
    "quebrada": () => {
        imagem.src = 'img/quebrada.jpg'
        state = 'broken'
    }
}

imagem.addEventListener("click", Quebrar)
botoes.addEventListener("click", VerificarId)
rest.addEventListener("click", Restaurar)