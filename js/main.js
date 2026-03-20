// 🔧 CORREÇÃO: REMOVIDO "export" (isso estava quebrando o acesso à função)
function loginAdmin() {

    const usuario = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;

    const usuarioCorreto = "usuario";
    const senhaCorreta = "senha";

    if (usuario === usuarioCorreto && senha === senhaCorreta) {

        alert("Login realizado com sucesso!");

        // ✅ REDIRECIONAMENTO (já estava certo)
        window.location.href = "admin.html";

    } else {
        alert("Usuário ou senha incorretos!");
    }
}

// 🔧 CORREÇÃO: ADICIONADO evento para o botão funcionar
window.addEventListener("DOMContentLoaded", () => {
    const btnToggleTheme = document.getElementById("toggle-theme");

    const botao = document.getElementById("loginAdmin");

    if (botao) {
        botao.addEventListener("click", loginAdmin);
    }

    if (btnToggleTheme) {
        btnToggleTheme.addEventListener("click", () => {
            document.body.classList.toggle("black");
        });
    }
    });