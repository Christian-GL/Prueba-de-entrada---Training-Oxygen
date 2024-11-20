    
var selectTipo = document.getElementById("selectTipo");
var botonFlechas = document.getElementById("botonFlechas");
var botonCorazon = document.getElementById("botonCorazon");
var inputDatos = document.getElementById("inputDatos");
var pUnidadMedida = document.getElementById("pUnidadMedida");
var pResultado = document.getElementById("pResultado");
var pResultadoUnidad = document.getElementById("pResultadoUnidad");
var listadoResultados = document.getElementById("listadoResultados");


/* --- BOTON FLECHAS PARA INTERCAMBIAR UNIDADES DE MEDIDA ---*/
botonFlechas.onclick = function () {

    var resultado = pResultado.textContent;

    if (selectTipo.value % 2) {
        selectTipo.value++;
    } else {
        selectTipo.value--;
    }
    inputDatos.value = resultado;
}


/*--- BOTON CORAZON PARA GUARDAR LOS RESULTADOS --- */
botonCorazon.onclick = function () {

    var datos = inputDatos.value;
    var selectIndice = selectTipo.value;
    var resultado = pResultado.textContent;
    var li = document.createElement("li");

    if (selectIndice == 1) {
        li.textContent = datos + " km → " + resultado + " millas";
    }
    else if (selectIndice == 2) {
        li.textContent = datos + " millas → " + resultado + " km";
    }
    else if (selectIndice == 3) {
        li.textContent = datos + " pies → " + resultado + " metros";
    }
    else if (selectIndice == 4) {
        li.textContent = datos + " metros → " + resultado + " pies";
    }
    else if (selectIndice == 5) {
        li.textContent = datos + " cm → " + resultado + " pulgadas";
    }
    else if (selectIndice == 6) {
        li.textContent = datos + " pulgadas → " + resultado + " cm";
    }
    listadoResultados.appendChild(li);                  // Agregamos el "li" al listado

    
    var btnEliminar = document.createElement("span");   // Agregamos el boton eliminar a cada elemento del listado       
    btnEliminar.textContent = "\u00d7";
    li.appendChild(btnEliminar);
    
    btnEliminar.onclick = function () {                 // Agregamos la funcionalidad que elimina del listado el elemento
        li.remove();
    }
}


/* --- REFRESCO DEL TIPO DE UNIDAD DE MEDIDA A INTRODUCIR --- */
window.setInterval(
    function(){
    if (!validarDatos(inputDatos.value)) {      // Controlamos si el imput de datos tiene...
        pResultado.innerHTML = "Introduce solo numeros y un [ . ] para indicar decimales";
        pResultadoUnidad.innerHTML = "";           // ...solo numeros y el "." que actua como coma
        return;
    }
    var datos = inputDatos.value;
    var selectIndice = selectTipo.value;
    var unidadIntroducida;
    var resultado;
    var resultadoUnidad;

    if (selectIndice == 1) {
        resultado = (datos * 0.621371).toFixed(2);          // km → millas
        unidadIntroducida = "km";
        resultadoUnidad = " millas";
    }
    else if (selectIndice == 2) {
        resultado = (datos * 1.60934).toFixed(2);           // millas → km
        unidadIntroducida = "millas";
        resultadoUnidad = "km";
    }
    else if (selectIndice == 3) {
        resultado = (datos * 0.3048).toFixed(2);            // pies → metros
        unidadIntroducida = "pies";
        resultadoUnidad = "metros";
    }
    else if (selectIndice == 4) {
        resultado = (datos * 3.28084).toFixed(2);           // metros → pies
        unidadIntroducida = "metros";
        resultadoUnidad = "pies";
    }
    else if (selectIndice == 5) {
        resultado = (datos * 0.393701).toFixed(2);          // cm → pulgadas
        unidadIntroducida = "cm";
        resultadoUnidad = "pulgadas";
    }
    else if (selectIndice == 6) {
        resultado = (datos * 2.54).toFixed(2);              // pulgadas → cm
        unidadIntroducida = "pulgadas";
        resultadoUnidad = "cm";
    }
    pResultado.innerHTML = resultado;
    pUnidadMedida.innerHTML = unidadIntroducida;
    pResultadoUnidad.innerHTML = resultadoUnidad;
  }
  ,100);      // Intervalo de tiempo (en "milisegundos")


/* --- VALIDACION QUE SOLO PERMITE NUMEROS Y PUNTOS --- */
function validarDatos(s) {
    var rgx = /^[0-9]*\.?[0-9]*$/;
    return s.match(rgx);
}
