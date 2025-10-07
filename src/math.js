function add(a, b) {
    return a + b;
}

// ES6 Syntax: mit export vorangestellt
// export function divide(a, b) {
function divide(a, b) {
    if (b === 0){
        throw new Error("Division by zero not allowed");
    }
    return a / b;
}

function hello(){
    console.log("Hallo Welt");
}

// ES6 Syntax:
export { add, divide, hello }
// ältere CommonJS Syntax
//module.exports = { add, divide, hello }