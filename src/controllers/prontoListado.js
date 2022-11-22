let peliculas=[
    {
        nombre:"La Llorona",
        duracion:110,
        idioma:"Doblada al español, Ingles",
        banner:"https://firebasestorage.googleapis.com/v0/b/cinemaharley.appspot.com/o/bannerLallorona.jpg?alt=media&token=577800d6-24d7-4a92-a5c2-7d51a80ae442",
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemaharley.appspot.com/o/laLlorona.png?alt=media&token=602a62d7-94f3-4e28-8c5e-329eec59669c",
        sinopsis:"La Llorona. La mujer que llora. Una aparición terrorífica, encerrada entre el Cielo y el Infierno. La sola mención de su nombre ha despertado el terror alrededor del mundo durante generaciones. Sus lagrimas son eternas, y letales, y aquellos que escuchen su llamada de muerte por la noche están condenados Ignorando la escalofriante advertencia de una madre sobre el peligro que podrían correr sus hijos, una trabajadora social (Linda Cardellini) con dos niños pequeños sufrirá extraños sucesos sobrenaturales. Su única esperanza será escapar de la maldición de La Llorona. En los márgenes donde el miedo y la fe colisionan, tendrán que sobrevivir a su mortal grito, cuyo acecho en la oscuridad no se detendrá.",
    },
    {
        nombre:"Historia de honor",
        duracion:90,
        idioma:"Doblada al español, frances",
        banner:"https://firebasestorage.googleapis.com/v0/b/cinemaharley.appspot.com/o/bannerHistoriadehonor.jpg?alt=media&token=92f2c299-e69b-4f33-9070-b41c373903ba",
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemaharley.appspot.com/o/historiadeHonor.png?alt=media&token=1a28873a-34fe-43a8-809a-8082ccefe729",
        sinopsis:"Un par de pilotos de combate de la Marina de los Estados Unidos arriesgan sus vidas durante la Guerra de Corea y se convierten en algunos de los hombres de ala más célebres de la Marina. Basada en el libro Devotion: An Epic Story of Heroism, Friendship, and Sacrifice de Adam Makos, Historia de honor es una epopeya de guerra aérea que cuenta la desgarradora historia real y la apasionante camaradería entre Jesse Brown y Tom Hudner durante la Guerra de Corea. Estos dos pilotos de combate de élite de la Marina de los Estados Unidos, con sus heroicos sacrificios, se convertirían en los hombres de ala más célebres de la Armada"
    },
    {
        nombre:"El prodigio",
        duracion:85,
        idioma:"Doblada al español, ingles",
        banner:"https://firebasestorage.googleapis.com/v0/b/cinemaharley.appspot.com/o/bannerElprodigio.jpg?alt=media&token=da42775c-527c-415b-86ce-5847c1977582",
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemaharley.appspot.com/o/elProdigio.png?alt=media&token=b8b04c8d-d942-494a-ade7-611624e66e76",
        sinopsis:"Thriller psicológico -dirigido por Sebastián Lelio (Gloria)- ambientado en los Midlands irlandeses en el año 1862. La historia sigue a una niña de once años que deja de comer pero que permanece milagrosamente viva y sana. Para saber qué ocurre, una enfermera inglesa llamada Lib Wright (interpretada por Florence Pugh) es llevada a este pequeño pueblo para investigar el extraño caso de esta muchacha llamada Anna O'Donnell."
    },
    {
        nombre:"Hasta los huesos",
        duracion:104,
        idioma:"Doblada al español, japones",
        banner:"https://firebasestorage.googleapis.com/v0/b/cinemaharley.appspot.com/o/bannerHastaloshuesos.jpg?alt=media&token=dc606974-cc11-4dd3-91d8-d28b0e9ee9ed",
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemaharley.appspot.com/o/hastalosHuesos.png?alt=media&token=073a5a31-45af-4cfb-a20c-90ad56e57fc8",
        sinopsis:"Basada en la novela homónima de Camille DeAngelis, el filme sigue a Maren Yearly (Taylor Russell), una joven que quiere ser alguien a quien la gente admire y respete. Cuando su madre la abandona el día después de su decimosexto cumpleaños, Maren va en busca del padre que nunca conoció y encuentra en el camino mucho más de lo que esperaba. El amor florece entre esta joven al margen de la sociedad y un vagabundo marginado (Timothée Chalamet) cuando se embarcan en una odisea a través de las carreteras secundarias de América. Sin embargo, a pesar de sus esfuerzos, todos los caminos conducen a sus aterradores pasados y a una última parada que determinará si su amor puede sobrevivir a sus diferencias."
    },
    {
        nombre: "Un mundo extraño",
        duracion:95,
        idioma:"Doblada al español, wakandes",
        banner:"https://firebasestorage.googleapis.com/v0/b/cinemaharley.appspot.com/o/bannerUnmundoextra%C3%B1o.png?alt=media&token=deb0670f-7454-48c0-808c-460eda09c9b8",
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemaharley.appspot.com/o/unmundoExtra%C3%B1o.jpg?alt=media&token=d2f2c6fe-52db-4ee6-8eb3-a5012ce2edb0",
        sinopsis:"Mundo extraño, un largometraje de acción original de Walt Disney Animation Studios, se sumerge en un viaje a una tierra inexplorada y traicionera en la que unos seres fantásticos aguardan la llegada de los míticos Clade, una familia de exploradores cuyas diferencias amenazan con frustrar su última misión, la más crucial con diferencia. Bajo las órdenes de Don Hall y el codirector/guionista Qui Nguyen, y producida por Roy Conli."
    },
]

//creamos una referencia al espacio HTML donde queremos
//hacer el render(PINTAR ETIQUETAS)
let etiquetaFila=document.getElementById("fila")

//SI YA TENGO DATOS QUE NORMALMENTE LLEGAN AL FRONT
//COMO UN ARREGLO DE OBJETOS DEBEMOS RECORRER Y DEPURAR
//DUCHA INFORMACION
peliculas.forEach(function(pelicula){
    //PARA PINTAR LA INFORMACION DE CADA PELICULA
    //DEBEMOS APLICAR UNA TECNICA CONOCIDA COMO TRAVERSING
    //TRAVERSING=CREAR ETIQUETAS DE HTML DESDE JS
    let columna=document.createElement("div")
    columna.classList.add("col")

    let banner=document.createElement("h1")
    banner.classList.add("d-none")
    banner.textContent=pelicula.banner

    let tarjeta=document.createElement("div")
    tarjeta.classList.add("card","h-100","shadow")

    let poster=document.createElement("img")
    poster.classList.add("img-fluid","w-100")
    poster.src=pelicula.poster

    let nombre=document.createElement("h3")
    nombre.classList.add("text-center","fw-bold","subrayado")
    nombre.textContent=pelicula.nombre

    let duracion=document.createElement("h5")
    duracion.classList.add("text-start")
    duracion.textContent="Duración: "+pelicula.duracion+" Min"

    let idioma=document.createElement("h6")
    idioma.classList.add("text-start")
    idioma.textContent=pelicula.idioma

    let sinopsis=document.createElement("p")
    sinopsis.classList.add("d-none")
    sinopsis.textContent=pelicula.sinopsis

    //PADRES E HIJOS
    etiquetaFila.appendChild(columna)
    columna.appendChild(tarjeta)
    tarjeta.appendChild(poster)
    tarjeta.appendChild(nombre)
    tarjeta.appendChild(duracion)
    tarjeta.appendChild(idioma)
    tarjeta.appendChild(sinopsis)
    tarjeta.appendChild(banner)
})

//escuchando el evento de clic en alguna pelicula de la cartelera
let peliculaSeleccionada={}
etiquetaFila.addEventListener("click", function(evento){
    if(evento.target.classList.contains("img-fluid")){
        //window.location.href="./src/views/verinfopelicula.html"
        //Obteniendo los datos de la pelicula
        peliculaSeleccionada.banner=evento.target.parentElement.querySelector('h1').textContent
        peliculaSeleccionada.imagen=evento.target.parentElement.querySelector('img').src
        peliculaSeleccionada.titulo=evento.target.parentElement.querySelector('h3').textContent
        peliculaSeleccionada.duracion=evento.target.parentElement.querySelector('h5').textContent
        peliculaSeleccionada.idioma=evento.target.parentElement.querySelector('h6').textContent
        peliculaSeleccionada.sinopsis=evento.target.parentElement.querySelector("p").textContent

        //enviando nuestros datos de la pelicula seleccionada a la memoria
        localStorage.setItem("pelicula",JSON.stringify(peliculaSeleccionada))

        window.location.href="../../src/views/verinfopelicula.html"
    }
});