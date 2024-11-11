const nome = "Pedro";
const idade = 25;
const activeStatus = true;

function displayUser(nome, idade, activeStatus) {
    if (activeStatus) {
        console.log(`${nome} tem ${idade} anos e está ativo.`);
    } else {
        console.log(`${nome} está inativo.`);
    }
}

displayUser(nome, idade, activeStatus);
