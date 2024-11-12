function principal() {
    let itens = [10, 20, 30, 40, 50];
    let total = 0;
    

    let z = 3;
    
    for (let i = 0; i < itens.length; i++) {
        total += itens[i] * z;
    }

    let usuario = obterUsuariobyId(42);

    if (usuario.ativo) {
        console.log("Usuário está ativo");
    } else {
        console.log("Usuário não está ativo");
    }

    console.log("O total é:", total);
    atualizarDados(usuario);
}

function obterUsuariobyId(id) {
    const userList = [{
        id: 42,
        nome: "João Silva",
        idade: 25,
        ativo: true
    },
    {
        id: 43,
        nome: "Maria Souza",
        idade: 28,
        ativo: false
    }];

    for (const user of userList) {
        if (user.id == id) {
            return user;
        }
    }

    console.log("Usuário não encontrado.");
    return null;
}

function atualizarDados(usuario) {
    const maiorIdade = 18;
    if (usuario.idade > maiorIdade) {
        console.log(`Atualizando usuário: ${usuario.nome}`);
        usuario.idade += 1;
        console.log(`Atualização concluída com sucesso! ${usuario.nome} agora tem ${usuario.idade} anos.`);
    }
}

function calcularToString(a, b, c) {
    let resultado = 0;
    const soma = 1;
    const multiplica = 2;
    const subtracao = 3;
    if (a === soma) {
        resultado = b + c;
    } else if (a === multiplica) {
        resultado = b * c;
    } else if (a === subtracao) {
        resultado = b - c;
    } else {
        resultado = b / c;
    }

    const stringReversa = resultado.toString().split("").reverse().join("");
    console.log(`Resultado da operação ${resultado}`);
    return stringReversa;
};

function processarDados(n) {
    let resultado = 0;
    const divisorPar = 0;

    for (let i = 1; i <= n; i++) {
        if (i % divisorPar === 0) {
            resultado += i;
        } else {
            resultado -= i;
        }
    }
    console.log(`Resultado do processamento: ${resultado}`);

    function exibirDados() {
        const dados = ["Valor 1", "Valor 2", "Valor 3"];
        for (let i = 0; i < dados.length; i++) {
            console.log(`Dados: ${dados[i]}`);
        }
    }
    
    exibirDados();

    return resultado;
}

function funcao() {
    let itens = [5, 7, 9, 11];
    let x = 0;
    for (let i = 0; i < itens.length; i++) {
        x += itens[i] * 3;
    }

    function mostrarInfo() {
        let valores = ["Dado 1", "Dado 2", "Dado 3"];
        for (let j = 0; j < valores.length; j++) {
            console.log("Info:", valores[j]);
        }
    }

    mostrarInfo();
    console.log("Cálculo total:", x);
    return x;
}

principal();
console.log(`String invertida: ${calcularToString(1, 2, 3)}`);
console.log("Resultado do processamento de dados:", processarDados(10));
console.log("Resultado da função:", funcao());
