import { loginAdmin } from "./admin.js";

document.addEventListener('DOMContentLoaded', () => {
  const btnTema = document.getElementById("toggle-theme");

  // Define estado inicial do botão/tema
  if (btnTema) {
    if (localStorage.getItem("theme") === "dark" || document.body.classList.contains("dark-mode")) {
      document.body.classList.add("dark-mode");
      btnTema.innerHTML = "☀️";
    } else {
      document.body.classList.remove("dark-mode");
      btnTema.innerHTML = "🌙";
    }

    btnTema.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
      const active = document.body.classList.contains("dark-mode");
      btnTema.innerHTML = active ? "☀️" : "🌙";
      localStorage.setItem("theme", active ? "dark" : "light");
    });
  }

  const buttonLoginAdmin = document.getElementById("loginAdmin");
  if (buttonLoginAdmin) {
    buttonLoginAdmin.addEventListener("click", loginAdmin);
  }

  const buttonLoginAssociado = document.getElementById("loginAssociado");
  if (buttonLoginAssociado) {
    import('./associado.js')
      .then(mod => {
        if (mod && typeof mod.loginAssociado === 'function') {
          buttonLoginAssociado.addEventListener('click', mod.loginAssociado);
        }
      })
      .catch(() => console.warn('associado.js não encontrado; botão associado inativo'));
  }

  const buttonLoginEmpresario = document.getElementById("loginEmpresario");
  if (buttonLoginEmpresario) {
    import('./empresario.js')
      .then(mod => {
        if (mod && typeof mod.loginEmpresario === 'function') {
          buttonLoginEmpresario.addEventListener('click', mod.loginEmpresario);
        }
      })
      .catch(() => console.warn('empresario.js não encontrado; botão empresario inativo'));
  }
});

