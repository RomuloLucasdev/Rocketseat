//Falsy quando um valor é considerado falso em um contexto booleano. Os valores falsy em JavaScript são: false, 0, "", null, undefined e NaN.

console.log("### Exemplos de valores falsy: ###");console.log(false ? "Verdadeiro" : "Falso"); // Falso
console.log(0 ? "Verdadeiro" : "Falso"); // Falso
console.log(-0 ? "Verdadeiro" : "Falso"); //Falso
console.log("" ? "Verdadeiro" : "Falso"); // Falso
console.log(null ? "Verdadeiro" : "Falso"); // Falso
console.log(undefined ? "Verdadeiro" : "Falso"); //Falso
console.log(NaN ? "Verdadeiro" : "Falso"); // Falso


//Truthy quando um valor é considerado verdadeiro em um contexto booleano. Todos os valores que não são falsy são considerados truthy. Alguns exemplos de valores truthy são: true, 1, "string", [], {}, function() {}, etc.

console.log("### Exemplos de valores truthy: ###");console.log(true ? "Verdadeiro" : "Falso"); // Verdadeiro
console.log(1 ? "Verdadeiro" : "Falso"); // Verdadeiro
console.log("string" ? "Verdadeiro" : "Falso"); // Verdadeiro
console.log([] ? "Verdadeiro" : "Falso"); // Verdadeiro
console.log({} ? "Verdadeiro" : "Falso"); // Verdadeiro
console.log(function() {} ? "Verdadeiro" : "Falso"); // Verdadeiro