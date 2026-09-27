/*

try {
 // TENTA EXECUTAR O CÓDIGO
  console.log(resultado);
} catch (error) {
 //CAPTURA O ERRO PARA TRATAR.
 //console.log("Não foi possível executar o seu pedido. Tente novamente mais tarde.");


 console.log(error)
}finally {
  console.log("Operação finalizada.");
}
*/

let result = 0;

try {
  if (result === 0) {
    //throw new é uma palavra reservada do JavaScript que permite lançar um erro personalizado.
    throw new Error("O resultado não pode ser zero.");
  }

} catch (error) {
  console.log(error);

} finally {
  console.log("FIM.");
}