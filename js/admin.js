// =========================================
// FUNÇÃO DE LOGIN DO ADMINISTRADOR
// =========================================
export function loginAdmin() {
    const usuarioInput = document.getElementById("usuario");
    const senhaInput = document.getElementById("senha");

    if (!usuarioInput || !senhaInput) {
        console.error("Campos de usuário ou senha não encontrados.");
        return;
    }

    const usuario = usuarioInput.value.trim();
    const senha = senhaInput.value.trim();

    const usuarioCorreto = "usuario";
    const senhaCorreta = "senha";

    if (usuario === usuarioCorreto && senha === senhaCorreta) {
        alert("Login realizado com sucesso!");
        window.location.href = "admin.html";
    } else {
        alert("Usuário ou senha incorretos!");
    }
}

// =========================================
// FUNÇÃO PARA INICIALIZAR O GRÁFICO DE CONTRIBUIÇÕES
// =========================================
function criarGraficoContribuicoes() {
    // Procura o elemento canvas no HTML
    const contribEl = document.getElementById("contribChart");

    // Só cria o gráfico se o elemento existir e a biblioteca Chart estiver carregada
    if (contribEl && typeof Chart !== "undefined") {
        new Chart(contribEl, {
            type: "bar",
            data: {
                labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"],
                datasets: [
                    {
                        label: "Contribuições",
                        data: [35000, 42000, 39000, 45000, 48000, 52000]
                    }
                ]
            }
        });
    }
}

// =========================================
// FUNÇÃO PARA INICIALIZAR O GRÁFICO FINANCEIRO
// =========================================
function criarGraficoFinanceiro() {
    // Procura o elemento canvas no HTML
    const financeEl = document.getElementById("financeChart");

    // Só cria o gráfico se o elemento existir e a biblioteca Chart estiver carregada
    if (financeEl && typeof Chart !== "undefined") {
        new Chart(financeEl, {
            type: "line",
            data: {
                labels: ["Out", "Nov", "Dez", "Jan", "Fev", "Mar"],
                datasets: [
                    {
                        label: "Receita",
                        data: [42000, 47000, 45000, 52000, 55000, 58000],
                        borderWidth: 3,
                        fill: false
                    }
                ]
            }
        });
    }
}

// =========================================
// EXECUTA TUDO SOMENTE QUANDO O HTML ESTIVER CARREGADO
// =========================================
window.addEventListener("DOMContentLoaded", () => {
    // procura possíveis elementos de login (nomes compatíveis)
    const formLogin = document.getElementById("formLoginAdmin");
    const botaoLogin = document.getElementById("btnLoginAdmin");
    const botaoLoginFallback = document.getElementById("loginAdmin"); // id usado no HTML

    if (formLogin) {
        formLogin.addEventListener("submit", (event) => {
            event.preventDefault();
            loginAdmin();
        });
    }

    const buttonToUse = botaoLogin || botaoLoginFallback;
    if (buttonToUse) {
        buttonToUse.addEventListener("click", (event) => {
            event.preventDefault();
            loginAdmin();
        });
    }

    // inicialização dos gráficos...
    criarGraficoContribuicoes();
    criarGraficoFinanceiro();
});