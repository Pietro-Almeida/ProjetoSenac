function mudarTema(){
  let body = document.body
  body.classList.toggle("dark")
  // salvar tema
  if(body.classList.contains("dark")){
    localStorage.setItem("tema","dark")
  }else{
    localStorage.setItem("tema","light")
  }
}
  // carregar tema salvo
  window.onload = function(){
  let tema = localStorage.getItem("tema")
  if(tema === "dark"){
    document.body.classList.add("dark")
}
}