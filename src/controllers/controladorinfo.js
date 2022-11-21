//obteniendo datos de la memoria
let peliculaConsultadaEnMemoria=JSON.parse(localStorage.getItem("pelicula"))
console.log("peliculaConsultadaEnMemoria")

//asignando valores a las eiquetas que quiero controlar:

let etiquetaImagen=document.getElementById("imagenPelicula")
etiquetaImagen.src=peliculaConsultadaEnMemoria.imagen

let etiquetaTitulo=document.getElementById("nombrePelicula")
etiquetaTitulo.textContent=peliculaConsultadaEnMemoria.titulo

let etiquetaDuracion=document.getElementById("duracionPelicula")
etiquetaDuracion.textContent=peliculaConsultadaEnMemoria.duracion

let sinopsis=document.createElement("p")
sinopsis.textContent=pelicula.sinopsis

let etiquetaSipnosis=document.createElement("sinopsisPelicula")
etiquetaSipnosis.textContent=peliculaConsultadaEnMemoria.