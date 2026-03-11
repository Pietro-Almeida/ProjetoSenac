const body = document.body
const btnTema = document.getElementById("toggle-theme")


btnTema.addEventListener("click", ()=> {
  document.body.classList.toggle("black")
  btnTema.innerHTML = document.body.classList.contains("black") ? "☀️" : "🌙"
})
