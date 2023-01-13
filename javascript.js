// Testing Variables
let a = 3;
let b = 2;

// Operating Functions
function add() {
    let c = a + b;
    document.getElementById("calcdisplay").innerText = c;
    console.log(c);
}

function sub() {
    let c = a - b;
    document.getElementById("calcdisplay").innerText = c;
    return c;
}

function mul() {
    let c = a * b;
    document.getElementById("calcdisplay").innerText = c;
    return c;
}

function div() {
    if (a == 0 || b == 0) {
        document.getElementById("calcdisplay").innerText = "Warning! Black hole imminent!";
        return "Warning! Black hole imminent!"
    } else {
        let c = a/b;
        document.getElementById("calcdisplay").innerText = c;
        return c;
    }
}


// Update display with button push - TEMP DISABLED FOR TESTING
/*
const numbuttons = document.querySelectorAll(".numbutton");
numbuttons.forEach((button) => {
    button.addEventListener("click", () => {
        document.getElementById("calcdisplay").innerText = button.id;
        let a = button.id;
        console.log(a);
    });
})
*/

// When +-*/ pressed, let op = button id - WORKS
const calbuttons = document.querySelectorAll(".calbutton");
calbuttons.forEach((button) => {
    button.addEventListener("click", () => {
        let op = button.id;
        console.log(op);
    });
})

// Operate function
function operate() {
    if (op = "add") {
        add();
        console.log("+ operate ran");
    } else if (op = "sub") {
        sub();
        console.log("- operate ran");
    }   else if (op = "mul") {
        mul();
        console.log("* operate ran");
    } else if (op = "div") {
        div();
        console.log("/ operate ran");
    } else (
        console.log("Uh oh! operate function malfunction")
    )
}

document.getElementById("equ").onclick = function() {operate()};
