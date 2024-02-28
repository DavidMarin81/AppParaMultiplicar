var isCorrect = new Boolean(false);
isCorrect = false;
var emojiTd = document.getElementById("emoji");

function generateMultiplication() {
    var num1 = Math.floor(Math.random() * 10) + 1;
    var num2 = Math.floor(Math.random() * 10) + 1;
    return { num1: num1, num2: num2, result: num1 * num2 };
}

function checkAnswer() {
    var userInput = parseInt(document.getElementById("answer").value);
    var multiplication = document.getElementById("multiplication").innerText;
    var result = parseInt(multiplication.split("x")[0]) * parseInt(multiplication.split("x")[1]);
    var verificarButton = document.getElementById("boton");

    if (userInput === result && isCorrect) {
        verificarButton.innerText = "Pulsa para comprobar";
        verificarButton.classList.remove("red-button"); // Elimina la clase de color rojo
        verificarButton.classList.add("green-button"); // Agrega la clase de color verde
        document.getElementById("answer").value = "";
        generateNewMultiplication();
        isCorrect = false;
        emojiTd.innerText = "🎓"; // Emoji sonriente
    } else if (userInput === result) {
        verificarButton.innerText = "Correcto!!! Click para una nueva";
        verificarButton.classList.remove("red-button"); // Elimina la clase de color rojo
        verificarButton.classList.add("green-button"); // Agrega la clase de color verde
        isCorrect = true;
        emojiTd.innerText = "😊"; // Emoji sonriente
    } else {
        verificarButton.innerText = "Prueba otra vez";
        verificarButton.classList.add("red-button"); // Agrega la clase de color rojo
        verificarButton.classList.remove("green-button"); // Elimina la clase de color verde
        document.getElementById("answer").value = "";
        isCorrect = false;
        emoji.style.display = "inline";
        emojiTd.innerText = "😢"; // Emoji triste
    }

}

function newOperation() {
    var verificarButton = document.getElementById("boton");

    verificarButton.classList.remove("red-button"); // Elimina la clase de color rojo
    verificarButton.classList.add("green-button"); // Agrega la clase de color verde

    generateNewMultiplication();
    document.getElementById("answer").value = "";
    document.getElementById("boton").innerText = "Pulsa para comprobar";
    emojiTd.innerText = "🎓"; // Emoji sonriente
    isCorrect = false;
}
    

function generateNewMultiplication() {
    var newMultiplication = generateMultiplication();
    var multiplicationDiv = document.getElementById("multiplication");
    multiplicationDiv.innerText = newMultiplication.num1 + " x " + newMultiplication.num2;
}

function generateMultiplication() {
    var num1 = Math.floor(Math.random() * 10) + 1;
    var num2 = Math.floor(Math.random() * 10) + 1;
    return { num1: num1, num2: num2, result: num1 * num2 };
}

// Genera una nueva multiplicación al cargar la página
window.onload = generateNewMultiplication;
