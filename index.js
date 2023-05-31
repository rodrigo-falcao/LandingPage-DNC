const Leonardo = window.document.getElementById("Leonardo")
const Bruna = window.document.getElementById("Bruna")
const Samantha = window.document.getElementById("Samantha")
const setaEsquerda = window.document.getElementById("seta-esquerda")
const setaDireita = window.document.getElementById("seta-direita")

function RolarParaDireita() {
    Bruna.style = "display:none"
    Samantha.style = "display:flex"
    setaDireita.style = "display:none"
    setaEsquerda.style = "display:flex"
}

function RolarParaEsquerda() {
    Bruna.style = "display:flex"
    Samantha.style = "display:none"
    setaDireita.style = "display:flex"
    setaEsquerda.style = "display:none"
}