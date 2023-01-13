// Operating Functions
function add(a,b) {
    let c = a + b;
    document.getElementById("calcdisplay").innerText = c;
    console.log(c);
}

function sub(a,b) {
    let c = a - b;
    document.getElementById("calcdisplay").innerText = c;
    return c;
}

function mul(a,b) {
    let c = a * b;
    document.getElementById("calcdisplay").innerText = c;
    return c;
}

function div(a,b) {
    if (a == 0 || b == 0) {
        document.getElementById("calcdisplay").innerText = "Warning! Black hole imminent!";
        return "Warning! Black hole imminent!"
    } else {
        let c = a/b;
        document.getElementById("calcdisplay").innerText = c;
        return c;
    }
}


// Update display with button push
const numbuttons = document.querySelectorAll(".numbutton");
numbuttons.forEach((button) => {
    button.addEventListener("click", () => {
        document.getElementById("calcdisplay").innerText = button.id;
        let a = button.id;
        console.log(a);
    });
})

// When +-*/ pressed, let op = button id
const calbuttons = document.querySelectorAll(".calbutton");
calbuttons.forEach((button) => {
    button.addEventListener("click", () => {
        let op = button.id;
        console.log(op);
    });
})


let a = 2;
let b = 3;


function operate(a, op, b) {
    if (op = "add") {
        add(a,b);
        console.log("operate ran");
    } else if (op = "sub") {
        sub(a,b);
    }   else if (op = "mul") {
        mul(a,b);
    } else if (op = "div") {
        div(a,b);
    }
}


// When = pressed, run operate function

document.getElementById("equ").onclick = function() {operate()};



// Test operate function:

