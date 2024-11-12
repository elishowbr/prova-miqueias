const d1 = "2024-01-01";
const d2 = "2024-12-31";

function calcularDiferenca(d1, d2) {
    const msDiferenca = new Date(d2) - new Date(d1);
    const millissegundos = 1000;
    const segundosNoMinuto = 60;
    const minutosNaHora = 60;
    const horasPorDia = 24;
    const msPorDia = millissegundos * segundosNoMinuto * minutosNaHora * horasPorDia;
    const diferenca = msDiferenca/msPorDia;
    return `A diferença entre as duas datas é de ${diferenca} dias`;
}

const resultado = calcularDiferenca(d1, d2);
console.log(resultado);
