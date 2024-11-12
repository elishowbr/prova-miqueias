const pessoa = { nome: "Maria", idade: 28 };

const maiorIdade = 18;
function checarMaioridade(pessoa) {
    return pessoa.idade >= maiorIdade ?  `${pessoa.nome} é maior de idade.` : `${pessoa.nome} não é maior de idade.`;
}

console.log(checarMaioridade(pessoa));
