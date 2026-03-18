import { loginAssociado } from "./associado.js";
import { loginEmpresario } from "./empresario.js";

const body = document.body
const btnTema = document.getElementById("toggle-theme")
const buttonLoginAssociado = document.getElementById("loginAssociado")
const buttonLoginEmpresario = document.getElementById("loginEmpresario")

btnTema.addEventListener("click", ()=> {
  document.body.classList.toggle("black")
  btnTema.innerHTML = document.body.classList.contains("black") ? "☀️" : "🌙"
})

if(buttonLoginAssociado){
  buttonLoginAssociado.addEventListener("click", ()=>{
    loginAssociado();
  })
}
if(buttonLoginEmpresario){
  buttonLoginEmpresario.addEventListener("click", ()=>{
    loginEmpresario();
  })
}

