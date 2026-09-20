let one = 1
let two = 2

// Igualdade (==) - compara apenas o valor
console.log("## Igualdade ##")
console.log(one == two) // false
console.log(one == 1) // true
console.log(one == "1") // true

// Diferente de (!=) - compara apenas o valor
console.log("## Diferente de ##")
console.log(one != two) // true
console.log(one != 1) // false
console.log(one != "1") // false

// Igualdade estrita (===) - compara o valor e o tipo
console.log("## Igualdade estrita ##")
console.log(one === two) // false
console.log(one === 1) // true
console.log(one === "1") // false

// Diferente estrito (!==) - compara o valor e o tipo
console.log("## Diferente estrito ##")
console.log(one !== two) // true
console.log(one !== 1) // false
console.log(one !== "1") // true