import { loginAdmin } from "./admin.js";
import { loginAssociado } from "./associado.js";

const body = document.body
const btnTema = document.getElementById("toggle-theme")
const buttonLoginAdmin = document.getElementById("loginAdmin")
const buttonLoginAssociado = document.getElementById("loginAssociado")

btnTema.addEventListener("click", ()=> {
  document.body.classList.toggle("black")
  btnTema.innerHTML = document.body.classList.contains("black") ? "☀️" : "🌙"
})

if(buttonLoginAdmin)
  buttonLoginAdmin.addEventListener("click", ()=>{
    loginAdmin();
  })
if(buttonLoginAssociado){
  buttonLoginAssociado.addEventListener("click", ()=>{
    loginAssociado();
  })
}

