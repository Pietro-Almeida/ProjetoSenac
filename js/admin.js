export function loginAdmin() {

    const usuario = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;

    // Credenciais fixas
    const usuarioCorreto = "usuario";
    const senhaCorreta = "senha";

    if (usuario === usuarioCorreto && senha === senhaCorreta) {

        alert("Login realizado com sucesso!");

        // redireciona para o painel do administrador
        window.location.href = "admin.html";

    } else {

        alert("Usuário ou senha incorretos!");

    }
}