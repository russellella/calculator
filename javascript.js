function add(a,b) {
    let c = a + b;
    document.getElementById("calcdisplay").innerText = c;
    return c;
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

function operate(a, op, b) {
    op(a,b);
}
let dispValue;

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        document.getElementById("calcdisplay").innerText = button.id;
        let dispValue = button.id;
    });
});