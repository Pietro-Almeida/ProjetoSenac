document.addEventListener("DOMContentLoaded", () => {

    const btnToggleTheme = document.getElementById("toggle-theme");
    const btnLoginAdmin = document.getElementById("loginAdmin");

    // Inicializa tema salvo
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
    }

    // Toggle tema (verifica existência do botão)
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

    // Login (se houver botão/inputs na página)
    if (btnLoginAdmin) {
        btnLoginAdmin.addEventListener("click", () => {
            loginAdmin();
        });
    }

    // Inicializa gráficos apenas se os canvases existirem e Chart estiver carregado
    if (typeof Chart !== "undefined") {
        const contribCanvas = document.getElementById("contribChart");
        if (contribCanvas) {
            new Chart(contribCanvas, {
                type: "bar",
                data: {
                    labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"],
                    datasets: [{
                        label: "Contribuições",
                        data: [35000, 42000, 39000, 45000, 48000, 52000]
                    }]
                }
            });
        }

        const financeCanvas = document.getElementById("financeChart");
        if (financeCanvas) {
            new Chart(financeCanvas, {
                type: "line",
                data: {
                    labels: ["Out", "Nov", "Dez", "Jan", "Fev", "Mar"],
                    datasets: [{
                        label: "Receita",
                        data: [42000, 47000, 45000, 52000, 55000, 58000],
                        borderWidth: 3,
                        fill: false
                    }]
                }
            });
        }
    } else {
        console.warn("Chart.js não está disponível. Verifique se o CDN foi carregado.");
    }

});

function loginAdmin() {
    const usuarioEl = document.getElementById("usuario");
    const senhaEl = document.getElementById("senha");

    if (!usuarioEl || !senhaEl) {
        // Não há formulário de login nesta página — apenas avisa no console
        console.warn("Campos de login não encontrados (ids: 'usuario', 'senha').");
        return;
    }

    const usuario = usuarioEl.value;
    const senha = senhaEl.value;

    // Credenciais fixas (só para exemplo)
    const usuarioCorreto = "usuario";
    const senhaCorreta = "senha";

    if (usuario === usuarioCorreto && senha === senhaCorreta) {
        alert("Login realizado com sucesso!");
        // Se houver uma página de painel separada, redirecione; caso contrário fica na atual.
        // window.location.href = "admin.html";
    } else {
        alert("Usuário ou senha incorretos!");
    }
}

/**
 * Exibe a página indicada e atualiza o estado do menu.
 * É exposto globalmente para suportar os onclick inline do HTML.
 */
function showPage(pageId) {
    // páginas
    const pages = document.querySelectorAll(".page");
    pages.forEach(p => p.classList.remove("active"));
    const target = document.getElementById(pageId);
    if (target) target.classList.add("active");

    // atualiza classes do menu (procura li cujo onclick contenha o id)
    const menuItems = document.querySelectorAll(".menu li");
    menuItems.forEach(li => li.classList.remove("active"));
    let matched = false;
    menuItems.forEach(li => {
        const onclickAttr = li.getAttribute("onclick") || "";
        if (onclickAttr.includes("'" + pageId + "'") || onclickAttr.includes('"' + pageId + '"')) {
            li.classList.add("active");
            matched = true;
        }
    });

    // se nenhum li com onclick bateu, tenta casar pelo texto/h1 (fallback)
    if (!matched) {
        menuItems.forEach(li => {
            if (li.textContent.trim().toLowerCase() === pageId.toLowerCase()) {
                li.classList.add("active");
            }
        });
    }
}

// expõe para o escopo global (para os onclick inline do HTML funcionarem)
window.showPage = showPage;