const titulo = document.querySelector("#titulo")
const css = document.querySelector("#css")
const cartelTitulo = document.querySelector("#titulo")
const cartelDatos = document.querySelector("#uno")
const cartelContacto = document.querySelector("#dos")
const cartelActividades = document.querySelector("#tres")
const botonCambio = document.querySelector("#cambiarEstilos")
const sinCss = document.querySelector("#style") 


if(css.getAttribute("href") == 'estilos/estilos.css'){
    sinCss.innerHTML = ""
}

botonCambio.addEventListener("click", () => {
     if(css.getAttribute("href") == 'estilos/estilos.css'){
        css.setAttribute("href", "estilos/estilos-retro.css")
        sinCss.innerHTML = ""
        cartelTitulo.innerHTML= "VENI AL GYM!!!"
        cartelDatos.innerHTML= "Datos Personales"
        cartelContacto.innerHTML= "Datos de Contacto"
        cartelActividades.innerHTML= "Actividades"
    }

    else if(css.getAttribute("href") == 'estilos/estilos-retro.css'){
        css.setAttribute("href", "estilos/estilos-futuro.css")
        sinCss.innerHTML = ""
        titulo.innerHTML = `<span style ="--l:'G';">G</span> 
                            <span style ="--l:'Y';">Y</span> 
                            <span style ="--l:'M';">M</span>`
    }
    
    else if(css.getAttribute("href") == 'estilos/estilos-futuro.css'){
        css.setAttribute("href", "estilos/estilos.css")
        sinCss.innerHTML = ""
        titulo.innerHTML = "Vení al GYM!"
        cartelDatos.innerHTML= "🙋‍♂️ Datos Personales 👀"
        cartelContacto.innerHTML= "📱Datos de Contacto ✉️"
        cartelActividades.innerHTML= "🚴 Actividades 🤸"
    }
})
