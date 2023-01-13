const titulo = document.querySelector("#titulo")
const css = document.querySelector("#css")
const cartelTitulo = document.querySelector("#titulo")
const cartelDatos = document.querySelector("#uno")
const cartelContacto = document.querySelector("#dos")
const cartelActividades = document.querySelector("#tres")
const botonCambio = document.querySelector("#cambiarEstilos")
const sinCss = document.querySelector("#style")


botonCambio.addEventListener("click", ev=>{
    if(css.href == 'http://127.0.0.1:5500/estilos/estilos.css'){
        css.href = './estilos/estilos-retro.css'
        sinCss.innerHTML = ""
        cartelTitulo.innerHTML= "VENI AL GYM!!!"
        cartelDatos.innerHTML= "Datos Personales"
        cartelContacto.innerHTML= "Datos de Contacto"
        cartelActividades.innerHTML= "Actividades"
    }
    else if(css.href =='http://127.0.0.1:5500/estilos/estilos-retro.css' ){
        css.href ='./estilos/estilos-futuro.css'
        sinCss.innerHTML = ""
        titulo.innerHTML = `<span style ="--l:'G';">G</span> 
                            <span style ="--l:'Y';">Y</span> 
                            <span style ="--l:'M';">M</span>`
    }
    else if(css.href == 'http://127.0.0.1:5500/estilos/estilos-futuro.css' 
            || css.href !== 'http://127.0.0.1:5500/estilos/estilos-retro.css'
            || css.href !== css.href == 'http://127.0.0.1:5500/estilos/estilos.css' ){
        css.href ='./estilos/estilos.css'
        sinCss.innerHTML = ""
        titulo.innerHTML = "Vení al GYM!"
        cartelDatos.innerHTML= "🙋‍♂️ Datos Personales 👀"
        cartelContacto.innerHTML= "📱Datos de Contacto ✉️"
        cartelActividades.innerHTML= "🚴 Actividades 🤸"
    }
})



