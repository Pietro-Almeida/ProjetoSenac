export function loginEmpresario() {

    const usuario = document.getElementById("cnpj").value;
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

let graficoEmpresa;

function loadChart(page){

    if(page === "estatisticas" && !graficoEmpresa){

        graficoEmpresa = new Chart(document.getElementById("graficoEmpresa"),{

            type:"bar",

            data:{
                labels:["Jan","Fev","Mar","Abr","Mai","Jun"],
                datasets:[{
                    label:"Visualizações",
                    data:[120,180,150,220,260,300],
                    borderWidth:2
                }]
            }

        });

    }

}

/* DARK MODE */

if(localStorage.getItem("theme") === "dark"){
    document.body.classList.add("dark-mode");
}

btnToggleTheme.addEventListener("click", ()=> {

    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }

});