//localStorage.removeItem("nombre")

window.addEventListener ("load",function(){
  var formulario = document.querySelector(".formularioLogin")
  var nombre = formulario.querySelector("input[name='nombre']")
  var mail = formulario.querySelector("input[name = 'email']")
  var validacion= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  formulario.onsubmit = function (event) {
    event.preventDefault()
    var select= formulario.querySelector("#mySelect")
    var option= select.options[select.selectedIndex]

    if (nombre.value == "" && mail.value.match (validacion)== null) {
      event.preventDefault ()
      alert ("Complete los campos")  }

    else if (nombre.value=="") {
      event.preventDefault ()
      alert ("Complete el nombre")}
    else if (mail.value.match (validacion)==null) {
    event.preventDefault ()
    alert ("Complete el e-mail")}
     else if (option.value=="") {
    event.preventDefault ()
    alert ("Complete el genero")
  }else {

    localStorage.setItem("nombre", nombre.value);
}
}
var usuario = localStorage.getItem("nombre")
console.log(usuario);
if (usuario != null) {
  document.getElementById("voton").style.display="none"
  document.getElementById("item-usuario").innerHTML = "<p>"+usuario+"</p>"
}


})
