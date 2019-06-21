// IDEA: pelis favs

// IDEA: BLOQUE 1

// Obtengo la info de local storage
var json = localStorage.getItem("pelisPrefes")

// Si ya habia favoritos..
if (json != null) {
  // Desempaquetar el string JSON
  var objLit = JSON.parse(json)

  // De todo el objeto literal me interesa EL ARRAY
  var favoritos = objLit.carac

}
else {
  // Si no habia creo el listado como VACIO
  var favoritos = []
}

// IDEA: BLOQUE 2

if (favoritos.indexOf(id) != -1) {


    document.querySelector("img.corazonVacio").style.display = "none";
    document.querySelector("img.corazonLleno").style.display="block";

}

document.querySelector("img.corazonVacio").onclick = function() {
  // IDEA: BLOQUE 3

    favoritos.push(id)


  // IDEA: BLOQUE 4

  // Lo vuelvo a pasar a OBJ literal

  obj = {
    carac: favoritos
  }

  // LO transformo en JSON
  json = JSON.stringify(obj)

  // Lo guardo en Local Storage
  localStorage.setItem("pelisPrefes", json)

  document.querySelector("img.corazonVacio").style.display = "none";
  document.querySelector("img.corazonLleno").style.display="block";
}

document.querySelector("img.corazonLleno").onclick = function() {
  // IDEA: BLOQUE 3


    // La quita
    var posicion = favoritos.indexOf(id)
    favoritos.splice(posicion,1)


  // IDEA: BLOQUE 4

  // Lo vuelvo a pasar a OBJ literal

  obj = {
    carac: favoritos
  }

  // LO transformo en JSON
  json = JSON.stringify(obj)

  // Lo guardo en Local Storage
  localStorage.setItem("pelisPrefes", json)

  document.querySelector("img.corazonVacio").style.display = "block";
  document.querySelector("img.corazonLleno").style.display="none";
}













})
