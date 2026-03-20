// =========================================
// FUNÇÃO DE LOGIN DO ADMINISTRADOR
// =========================================
export function loginAdmin() {
    // Captura o valor digitado no campo de usuário
    const usuarioInput = document.getElementById("usuario");

    // Captura o valor digitado no campo de senha
    const senhaInput = document.getElementById("senha");

    // Verifica se os campos existem antes de tentar acessar o .value
    if (!usuarioInput || !senhaInput) {
        console.error("Campos de usuário ou senha não encontrados no HTML.");
        return;
    }

    // Pega os valores digitados e remove espaços extras
    const usuario = usuarioInput.value.trim();
    const senha = senhaInput.value.trim();

    // Credenciais fixas de teste
    const usuarioCorreto = "usuario";
    const senhaCorreta = "senha";

    // Validação simples do login
    if (usuario === usuarioCorreto && senha === senhaCorreta) {
        alert("Login realizado com sucesso!");

        // Redireciona para o painel administrativo
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
    // =========================================
    // CONFIGURAÇÃO DO LOGIN
    // =========================================

    // Procura o formulário de login
    const formLogin = document.getElementById("formLoginAdmin");

    // Procura o botão de login
    const botaoLogin = document.getElementById("btnLoginAdmin");

    // Se existir formulário, captura o envio dele
    if (formLogin) {
        formLogin.addEventListener("submit", (event) => {
            // Impede o recarregamento automático da página
            event.preventDefault();

            // Chama a função de login
            loginAdmin();
        });
    }

    // Se não existir formulário, mas existir botão, usa clique no botão
    if (botaoLogin) {
        botaoLogin.addEventListener("click", (event) => {
            // Impede comportamento padrão
            event.preventDefault();

            // Chama a função de login
            loginAdmin();
        });
    }

    // =========================================
    // INICIALIZAÇÃO DOS GRÁFICOS
    // =========================================
    criarGraficoContribuicoes();
    criarGraficoFinanceiro();
});