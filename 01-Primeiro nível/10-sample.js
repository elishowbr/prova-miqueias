const userObj = {
    nome: "João",
    idade: 25,
};

function displayUserInfo(user) {
    console.log(`${user.nome} tem ${user.idade} anos.`);
}

displayUserInfo(userObj);
