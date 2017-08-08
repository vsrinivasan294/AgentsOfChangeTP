function input(text) {
    localStorage.setItem("text", text);
}

function getInput() {
    return localStorage.getItem("text");
}