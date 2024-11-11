const d1 = "2024-01-01";
const d2 = "2024-12-31";

function calcularDiferenca(d1, d2) {
    const msDiferenca = new Date(d2) - new Date(d1);
    const msPorDia = 1000 * 60 * 60 * 24;
    return `A diferença entre as duas datas é de ${msDiferenca/msPorDia} dias`;
}

const resultado = calcularDiferenca(d1, d2);
console.log(resultado);
