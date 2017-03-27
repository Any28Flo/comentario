
function actualiza() {
    var x = document.getElementById("comentarios").value;
    document.getElementById("preview").innerHTML =  x;
  //  document.getElementById("comentarios").innerHTML = val;
}
function textoGrande(){

  var  texto= document.getElementById("preview");
  // La etiqueta fontSize tiene valores predeterminados como
  //Checar la liga https://developer.mozilla.org/es/docs/Web/CSS/font-size

  texto.style.fontSize ="xx-large" ;
  return texto;
  console.log(texto.value);
  //return texto;

//  texto.style.color="blue";

}
// Nota el tamaño mediano es el tamaño por defecto por lo cual no se
//nota la diferentcia :3
function textoMediano(){
  var texto= document.getElementById("preview");
  texto.style.fontSize ="medium" ;
}

function textoPeque (){
  var texto = document.getElementById("preview");
  texto.style.fontSize = "xx-small";
}
function colorFondo(){
  var color= prompt("Color en hexadecimal");
  var texto = document.getElementById("preview");
  texto.style.background=color;
}
function left(){
  var texto = document.getElementById("preview");
  texto.style.textAlign = "left";

}
function derecha(){

  var texto = document.getElementById("preview");
  texto.style.textAlign = "right";
}
function centrar(){
  var texto = document.getElementById("preview");
  texto.style.textAlign = "center";
}
function agregaComentario(){
  var nuevoComentario = document.getElementById("preview").value;
  console.log(nuevoComentario);
  var agregaComen=document.createElement("li");

  agregaComen.innerHTML = nuevoComentario;
  document.getElementById("listaComentarios").appendChild(agregaComen);
  document.getElementById("preview").value= "";

}
function agregar() {
  var texto= document.getElementById("preview");
  var capa= document.getElementById("agregar");
  var comentario = document.getElementById("p");
  comentario.innerHTML= texto;
  capa.appendChild(comentario);
}


function eliminar(){
  var id = elemento.parentNode.getAttribute("")
  var parrafo = document.getElementById("agregar");
  parrafo.parentNode.removeChild(parrafo);
}
function foto(){
  var imagen = document.getElementById("comFoto");
  var url =prompt("Url comentario");
  imagen.src=(url);
}
