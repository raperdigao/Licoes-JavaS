

// Arrays de nome e sobrenome
const nome = ["Raphael", "Claudia", "Paulo", "Luis", "Karen"];
const sobrenome = ["Perdigão", "Pagni", "Mendes", "Moreira", "Santana"];

// Array para armazenar a saída combinada
let saida = [];

// Combinar nome e sobrenome e adicionar à saída
for (let i = 0; i < nome.length; i++) {

    let nomeCompleto = nome[i] + " " + sobrenome[i];
    saida.push(nomeCompleto)
    
    
}

// Saida de dados
console.log(saida);