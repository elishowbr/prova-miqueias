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

const n2 = 2;
const n3 = 3;
const n4 = 4;
const n5 = 5;
const n6 = 6;
const numeros = [1, n2, n3, n4, n5, n6];
const pares = listarPares(numeros);
console.log(pares);
