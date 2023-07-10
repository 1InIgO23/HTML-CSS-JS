function suma() {
    var num1 = parseFloat(document.getElementById("num1").value)
    var num2 = parseFloat(document.getElementById("num2").value)
    var resultado = num1 + num2
    document.getElementById("Resultado").textContent = resultado
    document.getElementById("num1").value = null
    document.getElementById("num2").value = null
}
function resta() {
    var num1 = parseFloat(document.getElementById("num1").value)
    var num2 = parseFloat(document.getElementById("num2").value)
    var resultado = num1 - num2
    document.getElementById("Resultado").textContent = resultado
    document.getElementById("num1").value = null
    document.getElementById("num2").value = null
}
function mult() {
    var num1 = parseFloat(document.getElementById("num1").value)
    var num2 = parseFloat(document.getElementById("num2").value)
    var resultado = num1 * num2
    document.getElementById("Resultado").textContent = resultado
    document.getElementById("num1").value = null
    document.getElementById("num2").value = null
}
function div() {
    var num1 = parseFloat(document.getElementById("num1").value)
    var num2 = parseFloat(document.getElementById("num2").value)
    var resultado = num1 / num2
    document.getElementById("Resultado").textContent = resultado
    document.getElementById("num1").value = null
    document.getElementById("num2").value = null
}
function raised() {
    var num1 = parseFloat(document.getElementById("num1").value)
    var num2 = parseFloat(document.getElementById("num2").value)
    var resultado = num1 ** num2
    document.getElementById("Resultado").textContent = resultado
    document.getElementById("num1").value = null
    document.getElementById("num2").value = null
}
function root() {
    var num1 = parseFloat(document.getElementById("num1").value)
    var num2 = parseFloat(document.getElementById("num2").value)
    var resultado = num2 ** (1/num1)
    document.getElementById("Resultado").textContent = resultado
    document.getElementById("num1").value = null
    document.getElementById("num2").value = null
}
function Log() {
    var num1 = parseFloat(document.getElementById("num1").value)
    var num2 = parseFloat(document.getElementById("num2").value)
    var resultado = Math.log(num2) / Math.log(num1);
    document.getElementById("Resultado").textContent = resultado
    document.getElementById("num1").value = null
    document.getElementById("num2").value = null
}