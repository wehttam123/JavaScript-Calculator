let equation = "";
let ans = "";
let history = [];

function leftBracket() {
    document.getElementById("screen").textContent += "(";
    equation += "(";
    history.push("(");
}

function rightBracket() {
    document.getElementById("screen").textContent += ")";
    equation += ")";
    history.push(")");
}

function one() {
    document.getElementById("screen").textContent += "1";
    equation += "1";
    pushNumber("1");
}

function two() {
    document.getElementById("screen").textContent += "2";
    equation += "2";
    pushNumber("2");
}

function three() {
    document.getElementById("screen").textContent += "3";
    equation += "3";
    pushNumber("3");
}

function four() {
    document.getElementById("screen").textContent += "4";
    equation += "4";
    pushNumber("4");
}

function five() {
    document.getElementById("screen").textContent += "5";
    equation += "5";
    pushNumber("5");
}

function six() {
    document.getElementById("screen").textContent += "6";
    equation += "6";
    pushNumber("6");
}

function seven() {
    document.getElementById("screen").textContent += "7";
    equation += "7";
    pushNumber("7");
}

function eight() {
    document.getElementById("screen").textContent += "8";
    equation += "8";
    pushNumber("8");
}

function nine() {
    document.getElementById("screen").textContent += "9";
    equation += "9";
    pushNumber("9");
}

function zero() {
    document.getElementById("screen").textContent += "0";
    equation += "0";
    pushNumber("0");
}

function add() {
    document.getElementById("screen").textContent += " + ";
    equation += " + ";
    history.push(" + ");
}

function subtract() {
    document.getElementById("screen").textContent += " - ";
    equation += " - ";
    history.push(" - ");
}

function multiply() {
    document.getElementById("screen").textContent += " * ";
    equation += " * ";
    history.push(" * ");
}

function divide() {
    document.getElementById("screen").textContent += " / ";
    equation += " / ";
    history.push(" / ");
}

function decimal() {
    document.getElementById("screen").textContent += ".";
    equation += ".";
    pushNumber(".");
}

function answer() {
    document.getElementById("screen").textContent += ans;
    equation += ans;
    history.push(ans);
}

function clearScreen() {
    document.getElementById("screen").textContent = "";
    document.getElementById("answer").textContent = "";
    history = [];
    equation = "";
}

function clearLast() {
    let last = history.pop();
    for (let i = 0; i < last.length; i++) {
        equation = equation.slice(0,equation.length - 1);
    }
    document.getElementById("screen").textContent = equation;
}

function equals() {

    try {
        eval(equation);
        document.getElementById("screen").textContent = eval(equation);
        document.getElementById("answer").textContent = equation + " =";
        ans = eval(equation);
    } catch (e) {
        if (e instanceof SyntaxError) {
            document.getElementById("answer").textContent = e.message;
        }
    } 
}

function pushNumber(num) {
    let top = history[history.length-1];
    if(!isNaN(top)) {
        let number = history.pop(); 
        number = number + num;
        history.push(number);
    }
    else {
        history.push(num);
    }
}