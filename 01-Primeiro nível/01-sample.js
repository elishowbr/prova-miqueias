function listarPares(arr) {
    const listaPares = [];
    const divisorPar = 2;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % divisorPar === 0) {
            listaPares.push(arr[i]);
        }
    }
    return listaPares;
}

const numeros = [1, 2, 3, 4, 5, 6];
const pares = listarPares(numeros);
console.log(pares);
