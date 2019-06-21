 // localStorage.removeItem("nombre")

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
    location.reload()
}
}
var usuario = localStorage.getItem("nombre")
console.log(usuario);

if (usuario != null) {
  document.getElementById("voton").style.display="none"
  document.getElementById("item-usuario").innerHTML = "<p>"+usuario+"</p>"
  document.getElementById("favourite").style.display="block"
}

// var desloguear = document.getElementById('logout')  // Creo una variable que se llama desloguear y agarra el boton de logout
//
// desloguear.addEventListener('click', function(){ //Cuando alguien clickea desloguear pasa lo siguiente...
//  localStorage.removeItem('nombre') // Remueve nombre del Local Storage, es como lo que esta arriba de todo que descomentan
//  document.getElementById('logout').style.display = 'none' //Hace que el logout no se vea mas
//  document.getElementById("item-usuario").style.display='none' // Hace que el nombre de la persona desaparezca
//  document.getElementById("favourite").style.display="none" // El link de favoritos desaparece
//  document.getElementById("voton").style.display="block" // ESTE ES EL BOTON DE LOG IN QUE DEBERIA APARECER!!!!!!!!!!!!!!!
// })
//
//  var submit = document.getElementById('submit') // Una variable submit
//  submit.addEventListener('click',function(){ // Cuando se apreta en submit...
//      document.getElementById('modal-example').style.display='none' // Desaparece todo el formulario
//    })

})
