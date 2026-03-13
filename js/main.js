import { loginAdmin } from "./admin.js";
const body = document.body
const btnTema = document.getElementById("toggle-theme")
const buttonLoginAdmin = document.getElementById("loginAdmin")

btnTema.addEventListener("click", ()=> {
  document.body.classList.toggle("black")
  btnTema.innerHTML = document.body.classList.contains("black") ? "☀️" : "🌙"
})
buttonLoginAdmin.addEventListener("click", ()=> {
  loginAdmin();
})

