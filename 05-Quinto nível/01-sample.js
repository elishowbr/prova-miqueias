function main() {
    const numeros = [10, 20, 30, 40, 50];
    let total = 0;

    const triplicaValor = 3;
    
    for (let i = 0; i < numeros.length; i++) {
        total += numeros[i] * triplicaValor;
    }
    console.log("O total é:", total);

    const usuario = obterUsuariobyId(42);

    if (usuario.ativo) {
        console.log("Usuário está ativo");
    } else {
        console.log("Usuário não está ativo");
    }

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

function processarDados(number) {
    let resultado = 0;
    const divisorPar = 2;

    for (let i = 1; i <= number; i++) {
        if (i % divisorPar === 0) {
            resultado += i;
        } else {
            resultado -= i;
        }
    }
    return resultado;
}

function testeLista() {
    const numeros = [5, 7, 9, 11];

    let numerosTriplicados = 0;

    for (let i = 0; i < numeros.length; i++) {
        numerosTriplicados += numeros[i] * 3;
    }

    function mostrarInfo() {
        const valores = ["Dado 1", "Dado 2", "Dado 3"];
        for (const valor of valores) {
            console.log(valor);
        }
    }

    mostrarInfo();
    return numerosTriplicados;
}

main();
console.log(`String invertida: ${calcularToString(1, 2, 3)}`);
console.log("Resultado do processamento de dados:", processarDados(10));
console.log("Resultado da função:", testeLista());
