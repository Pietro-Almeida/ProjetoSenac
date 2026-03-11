const nome = document.getElementById("nomeCompleto");
const cpf = document.getElementById("CPF");
const telefone = document.getElementById("Telefone");
const dataNascimento = document.getElementById("DataNascimento");
const email = document.getElementById("Email");
const endereço = document.getElementById("Endereço");
const profissão = document.getElementById("Profissão");

function loginAdmin() {

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