const nomeString = "Carlos";
const idadeInt = 32;

function displayInfo(nome = String, idade = parseInt) {
    console.log(`${nome} tem ${idade} anos.`);
}

displayInfo(nomeString, idadeInt);

// Nesse exemplo, o professor utilizou sufixos para as variáveis.
// Para respeitar a formatação do professor, mantive dessa maneira (embora saiba que não seja estritamente necessário.)
