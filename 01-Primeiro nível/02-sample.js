function verificarAcesso(user) {
    user.isAdmin ? console.log("Acesso permitido ao administrador") : console.log("Acesso negado.");
}
const usuario = { nome: "João", isAdmin: true };
verificarAcesso(usuario);
