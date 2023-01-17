let a = 0;
let c;
let op;
let x;
document.getElementById("calcdisplay").innerText = a;

const numbuttons = document.querySelectorAll(".numbutton");
numbuttons.forEach((button) => {
    button.addEventListener("click", () => {
        if (a == 0) {
            document.getElementById("calcdisplay").innerText = button.id;
            a = +button.id;
        } else if ((a != 0) && (op == undefined)) {
            document.getElementById("calcdisplay").innerText = button.id;
            a = +button.id;
            b = 0;
        } else if (a != 0) {
            b = a;
            a = +button.id;
            c = +`${b}${a}`
            document.getElementById("calcdisplay").innerText = c;
            a = c;
        }   else {
            document.getElementById("calcdisplay").innerText = "ERROR";
        }});})

const opbuttons = document.querySelectorAll(".opbutton");
opbuttons.forEach((button) => {
    button.addEventListener("click", () => {
        if (op == undefined) {
            x = a;
            op = button.id;
            a = 0;
        } else {
            operate(op);
            x = a;
            op = button.id;
            a = 0;
        }});})

function add() {
    b = x + a;
    document.getElementById("calcdisplay").innerText = b;
    a = b;
}

function sub() {
    b = x - a;
    document.getElementById("calcdisplay").innerText = b;
    a = b;
}

function mul() {
    b = x * a;
    document.getElementById("calcdisplay").innerText = b;
    a = b;
}

function div() {
    if (a == 0) {
        boom();
        
    } else {
        b = x/a;
        document.getElementById("calcdisplay").innerText = b;
        a = b;
    }
}

function operate(op) {
    if (op == "add") {
        add();
        console.log("+ operate ran");
    } else if (op == "sub") {
        sub();
        console.log("- operate ran");
    }   else if (op == "mul") {
        mul();
        console.log("* operate ran");
    } else if (op == "div") {
        div();
        console.log("/ operate ran");
    } else (
        console.log("Uh oh! operate function malfunction")
    )
}

document.getElementById("equ").onclick = function() {
    operate(op)
    op = undefined;
};

document.getElementById("clear").onclick = function() {clear()};

function clear() {
    a = 0;
    b = 0;
    c = 0;
    op = undefined;
    document.getElementById("calcdisplay").innerText = a;
}

const img = document.createElement("img");
img.src = "./images/boom-calc.png"
const calcframeholder = document.getElementById("calcframeholder");

function removeChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
    console.log("removeChildNodes ran");
}

function delay(milliseconds) {
    return new Promise(resolve => {
        setTimeout(resolve, milliseconds);
    });
}

async function boom(){
    document.getElementById("calcdisplay").innerText = "Calculator will self destruct in 3...";
    await delay(1000);
    document.getElementById("calcdisplay").innerText = "Calculator will self destruct in 2...";
    await delay(1000);
    document.getElementById("calcdisplay").innerText = "Calculator will self destruct in 1...";
    await delay(1000);
    // Remove Calculator
    removeChildNodes(calcframeholder);
    calcframeholder.appendChild(img);
    const button = document.createElement('button')
    button.innerText = "Rebuild Calculator";
    button.classList.add("rebuildbutton");
    button.addEventListener('click', refreshPage)
    rebuild.appendChild(button);
}

const refreshPage = () => {
    location.reload();
  }
        