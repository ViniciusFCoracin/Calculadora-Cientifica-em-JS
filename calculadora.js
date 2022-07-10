// Calculadora científica em JavaScript

//Define variáveis para cada um dos botões
const display = document.getElementById("display");
const shiftButton = document.getElementById("shift");
const alphaButton = document.getElementById("alpha");
const leftButton = document.getElementById("left");
const rightButton = document.getElementById("right");
const degreesButton = document.getElementById("degrees");
const modeButton = document.getElementById("mode");
const squareButton = document.getElementById("xsquare");
const rootButton = document.getElementById("sqrtx");
const logButton = document.getElementById("logx");
const sinxButton = document.getElementById("sinx");
const cosxButton = document.getElementById("cosx");
const tanxButton = document.getElementById("tanx");
const xpowerednButton = document.getElementById("xpoweredn");
const nrootxButton = document.getElementById("nrootx");
const logxbasenButton = document.getElementById("logxbasen");
const aoverbButton = document.getElementById("aoverb");
const piButton = document.getElementById("pi");
const sciNotationButton = document.getElementById("scinotation");
const aButton = document.getElementById("A");
const bButton = document.getElementById("B");
const openParenButton = document.getElementById("openparentheses");
const closeParenButton = document.getElementById("closeparentheses");
const memorySaverButton = document.getElementById("memorysaver");
const memoryCleanButton = document.getElementById("memoryclean");
const delButton = document.getElementById("del");
const acButton = document.getElementById("ac");
const percentButton = document.getElementById("percent");
const ansButton = document.getElementById("ans");
const equalButton = document.getElementById("equal");

// Define um iterável que contém todos os elementos <p> e <button>
const lista = document.querySelectorAll("p, button");

/*  Verifica se shift ou alpha está pressionado e, então, muda a aparência das teclas.
 * Aqui, é utilizado o valor dos atributos html "data-original, "data-shift" e "data-alpha", 
 * que armazenam, respectivamente, o valor que deve ser exibido nos botões e textos 
 * originalmente, quando "shift" é pressionado e quando "alpha" é. A escolha de uso dos atributos 
 * "data" foi feita apenas para poupar algumas boas linhas de código JavaScript, já que
 * poderíamos manipular os elementos usando id's e switch/cases.
 */
let isShiftPressed = false;
let isAlphaPressed = false;

function changeShiftText() {
    /* Quando pressionamos "shift", despressionamos "alpha" e voltamos as teclas para a 
    aparência original */
    isAlphaPressed = false;
    returnOriginal();

    /* Então, mudamos a aparência que deve ser assumida quando "shift" é clicado */
    if (!isShiftPressed) {
        shiftButton.classList.add("pressed");
        isShiftPressed = true;
        for (let elem of lista) {
            if (elem.dataset.shift) elem.innerText = elem.dataset.shift;
        }
    }
    else (isShiftPressed) = false;
}

function changeAlphaText() {
    /* Mesma coisa, mas dessa vez, quando "alpha" é pressionado */
    isShiftPressed = false;
    returnOriginal();

    if (!isAlphaPressed) {
        alphaButton.classList.add("pressed");
        (isAlphaPressed) = true;
        for (let elem of lista) {
            if (elem.dataset.alpha) elem.innerText = elem.dataset.alpha;
        }
    }
    else (isAlphaPressed) = false;
}

function returnOriginal() {
    shiftButton.classList.remove("pressed");
    alphaButton.classList.remove("pressed");
    for (let elem of lista) {
        if (elem.dataset.original) elem.innerText = elem.dataset.original;
    }
}

shiftButton.addEventListener("click", changeShiftText);
alphaButton.addEventListener("click", changeAlphaText);

/* Define a variável que armazenará o conteúdo digitado e mostrado no visor.
O valor de "text" é que será passado para o argumento de eval() */
let text = "";

// Define as variáveis que armazenarão os resultados anteriores
let ans = 0;
let preAns = 0;

//Define a função que calculará o resultado final e apresentará o resultado no display
let calculado = false;

function calc() {
    try {
        if (text === "") {
            return;
        }
        else {
            preAns = ans;
            ans = eval(text);
            display.innerText = ans;
            text = "";
            calculado = true;
        }
    } catch (e) {
        display.innerText = "SyntaxError"
    }
}
equalButton.addEventListener("click", calc);

//Define a função que adicionará os valores digitados como strings na variável text

function digit(e) {
    let tecla = e.target;
    if (calculado === true && tecla !== equalButton) {
        calculado = false;
        display.innerText = "";
    }
    if (tecla.dataset.text) {
        display.innerText += tecla.dataset.display;
        text += tecla.dataset.text;
        return;
    }
    else {
        switch (tecla) {
            case leftButton:
                //implementar
            case rightButton:
                //implementar
            case degreesButton:
                //implementar
            case modeButton:
                //implementar
            case squareButton:
                if (isShiftPressed === false) {
                    display.innerText += "²";
                    text += "**2";
                    break;
                }
                else {
                    display.innerText += "³";
                    text += "**3";
                    break;
                }
            case rootButton:
                if (isShiftPressed === false) {
                    display.innerText += "√(";
                    text += "Math.sqrt(";
                    break;
                }
                else {
                    display.innerText += "³√(";
                    text += "Math.cbrt(";
                    break;
                }
            case logButton:
                if (isShiftPressed === false) {
                    display.innerText += "log(";
                    text += "Math.log10(";
                    break;
                }
                else {
                    display.innerText += "ln(";
                    text += "Math.log(";
                    break;
                }
            case sinxButton:
                if (isShiftPressed === false) {
                    display.innerText += "sin(";
                    text += "Math.sin(";
                    break;
                }
                else {
                    display.innerText += "arcsin(";
                    text += "Math.asin(";
                    break;
                }
            case cosxButton:
                if (isShiftPressed === false) {
                    display.innerText += "cos(";
                    text += "Math.cos(";
                    break;
                }
                else {
                    display.innerText += "arccos(";
                    text += "Math.acos(";
                    break;
                }
            case tanxButton:
                if (isShiftPressed === false) {
                    display.innerText += "tan(";
                    text += "Math.tan(";
                    break;
                }
                else {
                    display.innerText += "arctan(";
                    text += "Math.atan(";
                    break;
                }
            case xpowerednButton:
                //implementar
            case nrootxButton:
                //implementar
            case logxbasenButton:
                //implementar
            case aoverbButton:
                //implementar
            case piButton:
                if (isShiftPressed === false) {
                    text += String(Math.PI);
                    display.innerText += "π";
                    break;
                }
                else {
                    text += String(Math.E);
                    display.innerText += "e";
                    break;
                }
            case sciNotationButton:
                if (isShiftPressed === false) {
                    display.innerText += "×10^(";
                    text += "*10**(";
                    break;
                }
                else {
                    display.innerText += "!";
                    //implementar
                    break;
                }
            case aButton:
                //implementar
            case bButton:
                //implementar
            case openParenButton:
                text += "(";
                display.innerText += "(";
                break;
            case closeParenButton:
                text += ")";
                display.innerText += ")";
                break;
            case memorySaverButton:
                //implementar
            case memoryCleanButton:
                //implementar
            case delButton:
                text = text.substring(0, text.length - 1);
                display.innerText = display.innerText.substring(0, display.innerText.length - 1);
                break;
            case acButton:
                text = "";
                display.innerText = text;
                break;
            case percentButton:
                if (isShiftPressed === false) {
                    display.innerText += "%";
                    text += "*0.01";
                    break;
                }
                else {
                    display.innerText += "rand";
                    text += "Math.random()";
                    break;
                }
            case ansButton:
                if (isShiftPressed === false) {
                    text += ans;
                    display.innerText += "Ans";
                    break;
                }
                else {
                    text += preAns;
                    display.innerText += "PreAns";
                    break;
                }
            default:
                break;
        }
    }
}
function factorial(n) {
    if (n === 0) {
        return 1;
    }
    else if (Number.isInteger(n) && n > 0) {
        return factorial(n - 1) * n;
    }
}

document.getElementById("calculadora").addEventListener("click", digit);