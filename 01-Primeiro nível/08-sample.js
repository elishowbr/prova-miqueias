const pessoa = { nome: "Maria", idade: 28 };

function checarMaioridade(pessoa) {
    return pessoa.idade >= 18 ?  `${pessoa.nome} é maior de idade.` : `${pessoa.nome} não é maior de idade.`;
}

console.log(checarMaioridade(pessoa));
