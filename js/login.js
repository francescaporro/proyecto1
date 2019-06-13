window.addEventListener ("load",function(){
  var formulario = document.querySelector(".formularioLogin")
  var nombre = formulario.querySelector("input[name='nombre']")
  var mail = formulario.querySelector("input[name = 'email']")
  var validacion= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  formulario.onsubmit = function (event) {
    var select= formulario.querySelector ("select")
    var option= select.options [select.selectIndex]

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
    alert ("Complete el genero")}
    else {
        localStorage.setItem(nombre)
        .boton.style.display = "none"
    }
}

})
