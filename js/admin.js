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

// Adia inicializações até o DOM estar pronto e checa existência dos elementos
window.addEventListener('DOMContentLoaded', () => {
    const contribEl = document.getElementById("contribChart");
    if (contribEl && typeof Chart !== 'undefined') {
        new Chart(contribEl, {
            type: "bar",
            data: {
                labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"],
                datasets: [{ label: "Contribuições", data: [35000, 42000, 39000, 45000, 48000, 52000] }]
            }
        });
    }

    const financeEl = document.getElementById("financeChart");
    if (financeEl && typeof Chart !== 'undefined') {
        new Chart(financeEl, {
            type: "line",
            data: {
                labels: ["Out", "Nov", "Dez", "Jan", "Fev", "Mar"],
                datasets: [{ label: "Receita", data: [42000, 47000, 45000, 52000, 55000, 58000], borderWidth: 3, fill: false }]
            }
        });
    }

    const btnToggleTheme = document.getElementById("toggle-theme");
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
    }

    if (btnToggleTheme) {
        btnToggleTheme.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");
            if (document.body.classList.contains("dark-mode")) {
                localStorage.setItem("theme", "dark");
            } else {
                localStorage.setItem("theme", "light");
            }
        });
    }
});
