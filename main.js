var palavra = [
    ["While", "Estrutura de repetição"],
    ["For", "Estrutura de repetição"],
    ["If", "Estrutura de condição"],
    ["Else", "Estrutura de condição"],
    ["SwitchCase", " tipo de mecanismo de controle"],
    ["BackEnd", "Local que fica os comando e códigos de um site"],
    ["Bit", 'menor unidade de medida de informação que pode ser transmitida e armazenada.'],
    ["Bug", "Grande dor de cabeça para programadores"],
    ["FrontEnd", 'parte visível ao consumidor final do site ou aplicativo'],
    ["Frameworks", "são como coleções de ferramentas, componentes e soluções que você pode encontrar em um mesmo pacote que facilitam a criação de aplicações complexas"],
    ["Backup", "cópia de arquivos em um outro dispositivo com objetivo de guardar dados."],
    ["Console", " Área em que é possível trabalhar na linha de comando."],
    ["Linguagem", "conjunto de definições (sintáticas e semânticas) usadas para fazer um texto que o computador é capaz de entender, ou seja, um programa de computador."],
    ["Blockchain", "protocolo de comunicação descentralizado utilizado, principalmente, para controlar as transações com criptomoedas."],
    ["Compilador", "transforma o código de uma linguagem de programação para uma linguagem de máquina"],
    ["Classe", "elemento do código que utilizamos para representar objetos do mundo real"],
    ["Objeto", "elemento computacional que representa alguma entidade (abstrata ou concreta)"],
    ["Biblioteca", "partes de códigos (como funções, por exemplo) já programados e que podem ser usados em outros códigos."],
    ["Servidor", "máquina onde roda o Back-End de um site, por exemplo, ou um Back-End acessível a outras aplicações diversas."],
    ["CSS", "linguagem de estilo que define a aparência de documento web HTML."],
    ["Typescript", "linguagem de código aberto desenvolvida pela Microsoft que foi construída em cima do Javascript"],
    ["automatos", " dispositivo que tem um mecanismo interno que permite executar certos movimentos ou desenvolver certas tarefas"],
    ["Plugin", "uma extensão de código que pode ser adicionada em outro código em que você está trabalhando."],
    ["after", " pseudo-elemento que é o último filho do elemento selecionado."],
    ["before", "pseudo-elemento que é o primeiro filho do elemento atingido"]
]


var letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

var selecionar = 0
var letrasFaltantes = []
var falha = 0

// Web-page onload
window.onload = function() {
    gId("moveKeybord").addEventListener('touchmove', function(letraPressionada) {
        alturaTela = window.innerHeight
        tY = letraPressionada.touches[0].clientY
        eL = gId("teclado")
        resY = alturaTela - tY - eL.offsetHeight
        if (resY < 0) {
            resY = 0
        } else if (resY > alturaTela / 2) {
            resY = alturaTela / 2
        }
        eL.style.bottom = resY + "px"   
    }, false)
    criarTeclado()
}

function iniciarJogo() {
    gId("home").className = "h"
    gId("result").className = "h"
    novoJogo()
}

function novoJogo() {
    limparLetras()
    limparJogador()
    criarLetra()
}

function limparLetras() {
    var e = document.getElementsByClassName("b")
    for (a = 0; a < e.length; a++) {
        e[a].setAttribute("data", "")
    }
}

// Clear player
function limparJogador() {
    falha = 0
    letrasFaltantes = []
    gId("g0").setAttribute("data", "false")
    gId("g1").setAttribute("data", "false")
    gId("g2").setAttribute("data", "false")
    gId("g3").setAttribute("data", "false")
    gId("g4").setAttribute("data", "false")
    gId("g5").setAttribute("data", "false")
    gId("g5").setAttribute("r", "false")
    gId("g5").setAttribute("l", "false")
    gId("g6").setAttribute("data", "false")
    gId("g6").setAttribute("l", "false")
    gId("g6").setAttribute("r", "false")
    gId("hintButton").setAttribute("data", "false")
    gId("hint").style.display = "none"
}

// Get new word
function criarLetra() {
    var d = gId("letter")
    d.innerHTML = ""
    selecionar = Math.floor(Math.random() * palavra.length)
    for (a = 0; a < palavra[selecionar][0].length; a++) {
        var x = palavra[selecionar][0][a].toUpperCase()
        var b = document.createElement("span")
        b.className = "l" + (x == " " ? " ls" : "")
        b.innerHTML = "&nbsp"
        b.id = "l" + a;
        d.appendChild(b)

        if (x != " ") {
            if (letrasFaltantes.indexOf(x) == -1) {
                letrasFaltantes.push(x)
            }
        }
    }
}

// Create keyboard
function criarTeclado() {
    var tas = gId("keybord")
    tas.innerHTML = ""
    for (a = 0; a < letras.length; a++) {
        var b = document.createElement("span")
        b.className = "b"
        b.innerText = letras[a]
        b.setAttribute("data", "")
        b.onclick = function() {
            bTas(this)
        }
        tas.appendChild(b)
    }
}

// Game check, If show next error / game end
function bTas(a) {
    if (a.getAttribute("data") == "") {
        var x = isExist(a.innerText)
        a.setAttribute("data", x)
        if (x) {
            if (letrasFaltantes.length == 0) {
                gameEnd(true)
            }
        } else {
            showNextFail()
        }
    }
}

// If letter "X" exist
function isExist(e) {
    e = e.toUpperCase()
    var x = letrasFaltantes.indexOf(e)
    if (x != -1) {
        letrasFaltantes.splice(x, 1)
        digitarLetra(e)
        return true
    }
    return false
}

// Show next fail drawing
function showNextFail() {
    falha++
    switch (falha) {
        case 1:
            gId("g0").setAttribute("data", "true")
            break;

        case 2:
            gId("g1").setAttribute("data", "true")
            break;

        case 3:
            gId("g2").setAttribute("data", "true")
            break;

        case 4:
            gId("g3").setAttribute("data", "true")
            gId("hintButton").setAttribute("data", "true")
            break;

        case 5:
            gId("g4").setAttribute("data", "true")
            break;

        case 6:
            gId("g5").setAttribute("data", "true")
            break;

        case 7:
            gId("g5").setAttribute("l", "true")
            break;

        case 8:
            gId("g5").setAttribute("r", "true")
            break;

        case 9:
            gId("g6").setAttribute("data", "true")
            gId("g6").setAttribute("l", "true")
            break;

        case 10:
            gId("g6").setAttribute("r", "true")
            gameEnd(false)
            break;
    }
}

function digitarLetra(e) {
    for (a = 0; a < palavra[selecionar][0].length; a++) {
        if (palavra[selecionar][0][a].toUpperCase() == e) {
            gId("l" + a).innerText = e
        }
    }
}

// Game result
function gameEnd(e) {
    var d = gId("result")
    d.setAttribute("data", e)
    if (e) {
        gId("rT").innerText = "Você venceu!"
        gId("rM").innerHTML = `Parabéns você achou a palavra!<br/><br/>Bom trabalho!<br/><br/><br/><br/><a href="https://forms.gle/64UZ8zWga7ngGstk8">feedback</a>`
    } else {
        gId("rT").innerText = "Você perdeu!"
        gId("rM").innerHTML = "a palavra era<br/><br/>\"" + palavra[selecionar][0].toUpperCase() + `\"<br/><br/></p>mais sorte na próxima vez.<br/><br/><a href="https://forms.gle/64UZ8zWga7ngGstk8">feedback</a>`
    }
    d.className = ""
}

// Show hint
function dica() {
    gId("hintText").innerText = palavra[selecionar][1]
    gId("hint").style.display = "block"
}

// Exit hint
function sairDica() {
    gId("hint").style.display = "none"
}

// Get HTML ID element by name
function gId(a) {
    return document.getElementById(a)
}
