document.addEventListener("DOMContentLoaded", function () {
     fetch("https://apiperu.fly.dev/")
         .then(response => response.json())
         .then(dataFromJson => {
             // Generar un número aleatorio entre 0 y 210 (la longitud del array)
             const randomIndex = Math.floor(Math.random() * dataFromJson.length);

            const cardTitle = document.getElementById("cardTitle");
            const etiquetaParrafo = document.getElementById("parrafo");

             // Obtener datos del JSON en base al índice aleatorio
             const palabra = dataFromJson[randomIndex].palabra;
             const significado = dataFromJson[randomIndex].significado;
          
             // Actualizar contenido de la tarjeta con los datos aleatorios
             cardTitle.innerText = palabra
             const parrafo = significado.map(sig => `${sig}`).join("");
             const numeroDeLetras = parrafo.length
             

             if (numeroDeLetras >= 50) {
                let parrafoTruncado = parrafo.substring(0,50) + "<b id='negrita'>...</b>"
                let finalParrafo = "<span id='spanfinal' class='noshow'>" + parrafo.substring(50,numeroDeLetras) + "</span>"
                etiquetaParrafo.innerHTML = parrafoTruncado + finalParrafo
                console.log(parrafoTruncado + finalParrafo)
             } else {
                etiquetaParrafo.innerHTML = parrafo
             }
             console.log(numeroDeLetras)
         })
         .catch(error => {
             console.error("Error al obtener los datos desde el API:", error);
         });
});

function toggleContent(box) {
    const puntos = document.getElementById('negrita')
    const spanfinal = document.getElementById('spanfinal')
    box.children.cardBody.children.parrafo.classList.toggle('expanded')
    spanfinal.classList.toggle('clicked')
    puntos.classList.toggle('negritac')
}
