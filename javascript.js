// When +-*/ pressed, let op = button.id
let op;

const opbuttons = document.querySelectorAll(".opbutton");
opbuttons.forEach((button) => {
    button.addEventListener("click", () => {
        op = button.id;
    });
})

// TESTING

let y = 2;
let c;

// add/sub/mul/div Functions
function add() {
    c = a + b;
    document.getElementById("calcdisplay").innerText = c;
    console.log(c);
}

function sub() {
    c = a - b;
    document.getElementById("calcdisplay").innerText = c;
    return c;
}

function mul() {
    c = a * b;
    document.getElementById("calcdisplay").innerText = c;
    return c;
}

function div() {
    if (a == 0 || b == 0) {
        document.getElementById("calcdisplay").innerText = "Warning! Black hole imminent!";
        return "Warning! Black hole imminent!"
    } else {
        c = a/b;
        document.getElementById("calcdisplay").innerText = c;
        return c;
    }
}

// Operate function
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

// Equals runs operate function
document.getElementById("equ").onclick = function() {operate()};

// Update display with button push - Update display works, but assigning button.id to a does not
const numbuttons = document.querySelectorAll(".numbutton");
numbuttons.forEach((button) => {
    button.addEventListener("click", () => {
        document.getElementById("calcdisplay").innerText = button.id;
        a = +button.id;
    });
})


