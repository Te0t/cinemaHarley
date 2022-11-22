//obteniendo datos de la memoria
let peliculaConsultadaEnMemoria=JSON.parse(localStorage.getItem("pelicula"))


//asignando valores a las eiquetas que quiero controlar:

let etiquetaBanner=document.getElementById("bannerPelicula")
etiquetaBanner.src=peliculaConsultadaEnMemoria.banner

let etiquetaImagen=document.getElementById("imagenPelicula")
etiquetaImagen.src=peliculaConsultadaEnMemoria.imagen

let etiquetaTitulo=document.getElementById("nombrePelicula")
etiquetaTitulo.textContent=peliculaConsultadaEnMemoria.titulo

let etiquetaDuracion=document.getElementById("duracionPelicula")
etiquetaDuracion.textContent=peliculaConsultadaEnMemoria.duracion

let etiquetaIdioma=document.getElementById("idiomaPelicula")
etiquetaIdioma.textContent=peliculaConsultadaEnMemoria.idioma

let etiquetaSipnosis=document.getElementById("sinopsisPelicula")
etiquetaSipnosis.textContent=peliculaConsultadaEnMemoria.sinopsis
