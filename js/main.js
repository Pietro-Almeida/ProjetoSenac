// =======================
// LOGIN ADMIN
// =======================
function loginAdmin() {

    const usuario = document.getElementById("usuario")?.value;
    const senha = document.getElementById("senha")?.value;

    const usuarioCorreto = "usuario";
    const senhaCorreta = "senha";

    if (usuario === usuarioCorreto && senha === senhaCorreta) {

        alert("Login realizado com sucesso!");
        window.location.href = "admin.html";

    } else {
        alert("Usuário ou senha incorretos!");
    }
}

// =======================
// LOGIN ASSOCIADO
// =======================
function loginAssociado() {

    const cpf = document.getElementById("cpf")?.value;
    const senha = document.getElementById("senhaAssociado")?.value;

    const cpfCorreto = "12345678900";
    const senhaCorreta = "123";

    if (cpf === cpfCorreto && senha === senhaCorreta) {

        alert("Login do associado realizado com sucesso!");
        window.location.href = "associado.html";

    } else {
        alert("CPF ou senha incorretos!");
    }
}

// =======================
// LOGIN EMPRESÁRIO
// =======================
function loginEmpresario() {

    // 🔧 ERRO: não existia login para empresário
    const cnpj = document.getElementById("cnpj")?.value;
    const senha = document.getElementById("senhaEmpresario")?.value;

    // Simulação de dados
    const cnpjCorreto = "12345678000100";
    const senhaCorreta = "123";

    if (cnpj === cnpjCorreto && senha === senhaCorreta) {

        alert("Login do empresário realizado com sucesso!");

        // 🔧 ERRO: faltava redirecionamento
        window.location.href = "empresario.html";

    } else {
        alert("CNPJ ou senha incorretos!");
    }
}

// =======================
// EVENTOS
// =======================
window.addEventListener("DOMContentLoaded", () => {

    const btnToggleTheme = document.getElementById("toggle-theme");

    const botaoAdmin = document.getElementById("loginAdmin");
    const botaoAssociado = document.getElementById("loginAssociado");
    const botaoEmpresario = document.getElementById("loginEmpresario");

    if (botaoAdmin) {
        botaoAdmin.addEventListener("click", loginAdmin);
    }

    if (botaoAssociado) {
        botaoAssociado.addEventListener("click", loginAssociado);
    }

    // 🔧 CORREÇÃO: adicionando evento do empresário
    if (botaoEmpresario) {
        botaoEmpresario.addEventListener("click", loginEmpresario);
    }

    if (btnToggleTheme) {
        btnToggleTheme.addEventListener("click", () => {
            document.body.classList.toggle("black");
        });
    }
});