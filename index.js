const titulo = document.querySelector("#titulo")
const css = document.querySelector("#css")
const cartelTitulo = document.querySelector("#titulo")
const cartelDatos = document.querySelector("#uno")
const cartelContacto = document.querySelector("#dos")
const cartelActividades = document.querySelector("#tres")
const botonCambio = document.querySelector("#cambiarEstilos")
const sinCss = document.querySelector("#style") 
const botonAleatorio = document.querySelector("#aleatorio")
const botonRecordar = document.querySelector("#recordar")
let posicion = ""


if(css.getAttribute("href") == 'estilos/estilos.css'){
    sinCss.innerHTML = ""
}

if(localStorage.botonRecordar === "activo"){
    botonRecordar.classList.add("presionado")
    if(localStorage.css === 'estilos/estilos-futuro.css'){
        css.setAttribute("href", 'estilos/estilos-futuro.css')
        diseñoFuturo()
    }
    if(localStorage.css === 'estilos/estilos-retro.css'){
        css.setAttribute("href", 'estilos/estilos-retro.css') 
        diseñoRetro() 
    }
}

botonCambio.addEventListener("click", () => {
     if(css.getAttribute("href") == 'estilos/estilos.css'){
        css.setAttribute("href", "estilos/estilos-retro.css")
        diseñoRetro()
    }

    else if(css.getAttribute("href") == 'estilos/estilos-retro.css'){
        css.setAttribute("href", "estilos/estilos-futuro.css")
       diseñoFuturo()
    }
    
    else if(css.getAttribute("href") == 'estilos/estilos-futuro.css'){
        css.setAttribute("href", "estilos/estilos.css")
        diseñoOriginal()
    }
})

botonAleatorio.addEventListener("click", ()=>{
    ev = Math.floor(Math.random() * 4)
    if(ev == 0){
      css.setAttribute("href", "") 
    }
    else if(ev == 1){
        css.setAttribute("href", "estilos/estilos.css")
        diseñoOriginal()
       
    }
    else if (ev == 2){
        css.setAttribute("href", "estilos/estilos-retro.css")  
        diseñoRetro()    
    }
    else{
        css.setAttribute("href", "estilos/estilos-futuro.css")
        diseñoFuturo()
    }
})

botonRecordar.addEventListener("click", ()=>{
    console.log(localStorage)
    if(localStorage.length === 0){
        posicion = css.getAttribute("href")
        localStorage.setItem("botonRecordar","activo")
        localStorage.setItem("css", posicion)
        botonRecordar.classList.add("presionado")
    }
    else{
        botonRecordar.classList.remove("presionado")
        localStorage.clear()
    }
})





function diseñoOriginal(){
    sinCss.innerHTML = ""
    titulo.innerHTML = "Vení al GYM!"
    cartelDatos.innerHTML= "🙋‍♂️ Datos Personales 👀"
    cartelContacto.innerHTML= "📱Datos de Contacto ✉️"
    cartelActividades.innerHTML= "🚴 Actividades 🤸"
}

function diseñoRetro(){
    sinCss.innerHTML = ""
    cartelTitulo.innerHTML= "VENI AL GYM!!!"
    cartelDatos.innerHTML= "Datos Personales"
    cartelContacto.innerHTML= "Datos de Contacto"
    cartelActividades.innerHTML= "Actividades"
}


function diseñoFuturo(){
    sinCss.innerHTML = ""
    titulo.innerHTML = `<span style ="--l:'G';">G</span> 
                        <span style ="--l:'Y';">Y</span> 
                        <span style ="--l:'M';">M</span>`
}