let array = ["Banana", "Abacaxi", "Morango", "Uva"];
console.log(array);

const contagemArray = array.length;
console.log(`Sua sacola possui: ${contagemArray} itens.`);

const deletarUltimoItem = array.pop();
console.log(`Removido o item: ${deletarUltimoItem}`);

const deletarPrimeiroItem = array.shift();
console.log(`Removido o item: ${deletarPrimeiroItem}`);

console.log(`Sua sacola possui penas: ${array} após a exclusão.`);
