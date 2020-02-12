let equation = "";
let ans = "";
let history = [];
let clearNext = false;

function leftBracket() {
    clearAns("(");
    document.getElementById("screen").textContent += "(";
    equation += "(";
    history.push("(");
}

function rightBracket() {
    clearAns(")");
    sddocument.getElementById("screen").textContent += ")";
    equation += ")";
    history.push(")");
}

function one() {
    clearAns("1");
    document.getElementById("screen").textContent += "1";
    equation += "1";
    pushNumber("1");
}

function two() {
    clearAns("2");
    document.getElementById("screen").textContent += "2";
    equation += "2";
    pushNumber("2");
}

function three() {
    clearAns("3");
    document.getElementById("screen").textContent += "3";
    equation += "3";
    pushNumber("3");
}

function four() {
    clearAns("4");
    document.getElementById("screen").textContent += "4";
    equation += "4";
    pushNumber("4");
}

function five() {
    clearAns("5");
    document.getElementById("screen").textContent += "5";
    equation += "5";
    pushNumber("5");
}

function six() {
    clearAns("6");
    document.getElementById("screen").textContent += "6";
    equation += "6";
    pushNumber("6");
}

function seven() {
    clearAns("7");
    document.getElementById("screen").textContent += "7";
    equation += "7";
    pushNumber("7");
}

function eight() {
    clearAns("8");
    document.getElementById("screen").textContent += "8";
    equation += "8";
    pushNumber("8");
}

function nine() {
    clearAns("9");
    document.getElementById("screen").textContent += "9";
    equation += "9";
    pushNumber("9");
}

function zero() {
    clearAns("0");
    document.getElementById("screen").textContent += "0";
    equation += "0";
    pushNumber("0");
}

function add() {
    clearAns(" + ");
    document.getElementById("screen").textContent += " + ";
    equation += " + ";
    history.push(" + ");
}

function subtract() {
    clearAns(" - ");
    document.getElementById("screen").textContent += " - ";
    equation += " - ";
    history.push(" - ");
}

function multiply() {
    clearAns(" * ");
    document.getElementById("screen").textContent += " * ";
    equation += " * ";
    history.push(" * ");
}

function divide() {
    clearAns(" / ");
    document.getElementById("screen").textContent += " / ";
    equation += " / ";
    history.push(" / ");
}

function decimal() {
    clearAns(".");
    document.getElementById("screen").textContent += ".";
    equation += ".";
    pushNumber(".");
}

function answer() {
    clearAns(ans);
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
        if (equation === "2 + 2")//Easter egg
        {
            document.getElementById("answer").textContent = equation + " is 4 - 1 thats 3, quick mafs.";
        } 
        else {
            document.getElementById("answer").textContent = equation + " =";
        }
        ans = eval(equation);
        clearNext = true;
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

function clearAns(operator) {
    if (clearNext === true) {
        switch (operator) {
            case " + ":
            case " - ":
            case " * ":
            case " / ":
                break;
            default:
                clearScreen();
                break;
        }
        clearNext = false;
    }
}