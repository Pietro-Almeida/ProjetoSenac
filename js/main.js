import { loginAdmin } from "./admin.js";
import { loginAssociado } from "./associado.js";
import { loginEmpresario } from "./empresario.js";


// 🔧 CORREÇÃO: ADICIONADO evento para o botão funcionar
window.addEventListener("DOMContentLoaded", () => {
    const btnToggleTheme = document.getElementById("toggle-theme");
    const btnLoginAdmin = document.getElementById("loginAdmin");
    const btnLoginAssociado = document.getElementById("loginAssociado");
    const btnLoginEmpresario = document.getElementById("loginEmpresario");

    if (btnLoginAdmin) {
        btnLoginAdmin.addEventListener("click", (e) => {
            e.preventDefault();
            loginAdmin(); // loginAdmin já faz alert + redirect
        });
    }

    if (btnLoginAssociado) {
        btnLoginAssociado.addEventListener("click", (e) => {
            e.preventDefault();
            loginAssociado(); // loginAssociado já faz alert + redirect
        });
    }

    if (btnLoginEmpresario) {
        btnLoginEmpresario.addEventListener("click", (e) => {
            e.preventDefault();
            loginEmpresario(); // loginEmpresario já faz alert + redirect
        });
    }

    if (btnToggleTheme) {
        btnToggleTheme.addEventListener("click", () => {
            document.body.classList.toggle("black");
        });
    }
});
