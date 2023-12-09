//é como uma caixa com outras caixas dentro, que podem ser acessadas através do seu 
// índice entre colchetes []. O primeiro índice é sempre o 0 (zero), portanto um vetor de 4 posições terá 
// índice de 0 a 3. Elas se comportam como variáveis em tudo, e preciso utilizar colchetes tanto na 
// declaração como no acesso aos dados.

//array em js é heterogenio, ou seja, podemos colocar qualquer coisa, string, int, etc.
//ainda mais, não possui um tamanho fixo;


// indice = 0   1   2   3       4
const valores = [18.0, 80, 43, 1.8888, "teste"]

//var(array) -> definindo um indice 10 e atribuindo o valor de 967 para o array
valores[10] = 967 // --> incluindo o indice 10 no array

// utilizar literal template igual ao DAS OPÇÕES DO SWITCH
// $ é para chamar o array igual a interpolação
console.log(`

${valores[0]}
${valores[3].toFixed(1)} //limita as casas decimais em 2 apos a virgula
${valores[10]}
${valores}
${valores.length} // extensão do nosso array (numeral)

`);

// metodos de array 1

// *****************************************************************************************************************************
// 1 - push -> utilizado para adicionar itens no array (sempre na ultiam posição)
// posições são         0          1        2          3
const pushArray = ['girafa', 'leão', 'coala', 'camaleão']

// adicionando valores no array pusharray () invoca no final
pushArray.push("caramelo")


// unshift acrescenta no começo do array
pushArray.unshift("animal1")

// puxar array na posição 0
console.log(pushArray[0]);

//imprime na tela os arrays da variavel pushArray
console.log(pushArray);

// Mosta comprimento do array
console.log(pushArray.length);


// *****************************************************************************************************************************
// 2 - pop -> remove o ultimo item do array
const popArray = ["André", "Leonardo", "ana", "beatriz"] 

console.log(popArray);

popArray.pop();

console.log(popArray);

// shifit -> remove a primeira posiçção do array
popArray.shift()

console.log(popArray);


// *****************************************************************************************************************************
// 3- delete -> 

const deleteArray = ["banana", "maça", "uva", "pera", "salada mista"]

// especificar qual posição deseja excluir, se desejar excluir tudo deixar []
delete deleteArray[1]

console.log(deleteArray);

// splçice => substituir valores
// especificar a posição do array, quantos será deletado e o novo valor

//                 posição      quantidade de valores        novo valor
deleteArray.splice(   1,               1,                      "melão")

// //substitui um item na posição desejada
// deleteArray[1] = "mamão"

console.log(deleteArray);

// *****************************************************************************************************************************
// 4 -> filter -> funções -> somente consegue visualizar, porém não modifica
//                   0   1   2   3   4   posições
const filterArray = [1, 50, 20, 35, 60]
// sem o metodo filter
console.log(filterArray);

// com o metodo filter  nome da variavel  nome da função
const arrayFiltrado = filterArray.filter( (filtrodoarray) => {

    // bloco de execução
    // processo de filtar numero maiores que 20
    return filtrodoarray > 20
} )

// Saida de dados
console.log(arrayFiltrado);
console.log(arrayFiltrado.length);


// *****************************************************************************************************************************
// 5 - map -> modifica o array existente -> criar um novo array modificado - > funções
const mapArray = [10, 15, 20, 25, 30, 35]

//inicio modificação array
//                       variavel      nome da função     arrow function
const arrayModificado = mapArray.map((mapArrayModificado) => {

    return mapArrayModificado * 2
})

// saida de dados
console.log(mapArray);
console.log(arrayModificado);

// *****************************************************************************************************************************
// 6 - foreach - lista em vertical
const forArray = ["jubileu", "eyk", "jabes", "ane"]

// inicio          nome da função
forArray.forEach((listarArray) => {

 // Saida de dados
 
 return console.log(listarArray);
})


// *****************************************************************************************************************************
// 7 - sort
// crie uma array de nomes e em seguida organize eles em ordem alfabética - Funciona para string
const sortArray = ["janeiro", "fevereiro", "março", "abril", "maio", "junho"]
console.log(sortArray);

// Deixou em ordem alfabetica
sortArray.sort()
console.log(sortArray);

// *****************************************************************************************************************************
const arraySortNumber = [10, 23205, 542, 871, 1050]
console.log(arraySortNumber);
arraySortNumber.sort()
console.log(arraySortNumber);

// *****************************************************************************************************************************


