const prompt = require("prompt-sync")();
// Solicitar ao usuário que insira três notas
var nota1 = parseFloat(prompt("Digite a primeira nota (entre 0 e 10):"));
var nota2 = parseFloat(prompt("Digite a segunda nota (entre 0 e 10):"));
var nota3 = parseFloat(prompt("Digite a terceira nota (entre 0 e 10):"));

// Verificar se as notas estão dentro do intervalo válido (0 a 10)
if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10 || nota3 < 0 || nota3 > 10) {
    console.log("Por favor, insira notas válidas entre 0 e 10.");
} else {
    // Calcular a média das notas
    var media = (nota1 + nota2 + nota3) / 3;

    // Exibir o resultado no console
    console.log("A média das notas é: " + media.toFixed(2)); // Limitando a 2 casas decimais
}
