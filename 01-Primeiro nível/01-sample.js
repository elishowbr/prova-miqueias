function listarPares(arr) {
    const listaPares = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            listaPares.push(arr[i]);
        }
    }
    return listaPares;
}

const numeros = [1, 2, 3, 4, 5, 6];
const pares = listarPares(numeros);
console.log(pares);
