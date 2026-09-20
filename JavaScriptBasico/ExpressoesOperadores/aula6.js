let email = true;
let password = true;

let email2 = false;
let password2 = true;

let login = false

//Operadores Lógicos:

// && -> AND -> E - Se tudo for verdadeiro, retorna verdadeiro, caso contrário retorna falso;
console.log(email && password); // true
console.log(email2 && password2); // false

// || -> OR -> OU -> Se uma das condições for verdadeira, retorna verdadeiro, caso contrário retorna falso;
console.log(email2 || password2); // true
console.log(email2 || login); // false

// ! -> NOT -> NÃO -> Inverte o valor lógico, se for verdadeiro retorna falso, se for falso retorna verdadeiro;
console.log(!email); // false
console.log(!login); // true



