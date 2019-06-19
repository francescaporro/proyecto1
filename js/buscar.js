window.addEventListener("load", function() {

  var queryString = window.location.search
  queryString = new URLSearchParams(queryString)
  var buscado = queryString.get("buscar")
console.log(buscado);
  fetch("https://api.themoviedb.org/3/search/movie?api_key=55e95e0127dd3fb1d9735ac5b1829c94&language=en-US&query="+buscado+"&page=1&include_adult=false")
  .then(function(respuesta) {
    return respuesta.json()
  })
  .then(function(informacion) {
    console.log(informacion);
    var peliculas = informacion.results

    for (var i = 0; i < peliculas.length; i++) {

      document.querySelector("main ul.buscado").innerHTML += '<li> <a href="detalleDeUnaPelicula.html?idPelicula='+peliculas[i].id+'">   <img src="https://image.tmdb.org/t/p/original' + peliculas[i].poster_path + '" alt=""></a></li>'
    }


  })
  .catch (function (error) {
    console.log("Error" + error);
  })





})
