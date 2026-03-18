export function loginAssociado() {

    const usuario = document.getElementById("cpf").value;
    const senha = document.getElementById("senha").value;

    // Credenciais fixas
    const usuarioCorreto = "usuario";
    const senhaCorreta = "senha";

    if (usuario === usuarioCorreto && senha === senhaCorreta) {

        alert("Login realizado com sucesso!");

        // redireciona para o painel do administrador
        window.location.href = "empresario.html";

    } else {

        alert("Usuário ou senha incorretos!");

    }
}

const btnToggleTheme = document.getElementById("toggle-theme")

function showPage(event, page){

    document.querySelectorAll(".page").forEach(p=>{
        p.classList.remove("active")
    })

    document.getElementById(page).classList.add("active")

    document.querySelectorAll(".menu li").forEach(li=>{
        li.classList.remove("active")
    })

    event.target.classList.add("active")

    loadChart(page)
}

/* GRÁFICO CONTROLADO */

let grafico;

function loadChart(page){

    if(page === "painel" && !grafico){

        grafico = new Chart(document.getElementById("grafico"),{

            type:"line",

            data:{
                labels:["Out","Nov","Dez","Jan","Fev","Mar"],
                datasets:[{
                    label:"Contribuições",
                    data:[200,200,200,200,200,200],
                    borderWidth:3,
                    fill:false
                }]
            }

        });

    }

}

// garante renderizar o gráfico na carga inicial se a página 'painel' já estiver ativa
const initialActive = document.querySelector(".page.active");
if(initialActive){
    loadChart(initialActive.id);
}

/* DARK MODE */

if(localStorage.getItem("theme") === "dark"){
    document.body.classList.add("dark-mode");
}

// protege caso o elemento não exista
if (btnToggleTheme) {
  btnToggleTheme.addEventListener("click", ()=> {

      document.body.classList.toggle("dark-mode");

      if(document.body.classList.contains("dark-mode")){
          localStorage.setItem("theme", "dark");
      } else {
          localStorage.setItem("theme", "light");
      }

  });
}