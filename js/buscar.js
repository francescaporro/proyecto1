window.addEventListener("load", function() {

  var queryString = location.search

  queryString = new URLSearchParams(queryString)

  var buscar = queryString.get("buscar")

  fetch('https://api.themoviedb.org/3/search/movie?api_key=55e95e0127dd3fb1d9735ac5b1829c94%26language&language=en-US&query=string&page=1&include_adult=false&region=string')
  .then(function(respuesta) {
    return respuesta.json()
  })
  .then(function(informacion) {
    var peliculas = informacion.results

    for (var i = 0; i < peliculas.length; i++) {

      document.querySelector(".proximamente").innerHTML += '<li> <a href="detalleDeUnaPelicula.html">   <img src="https://image.tmdb.org/t/p/original' + peliculas[i].poster_path + '" alt=""></a></li>'
    }
  })
  .then(function(respuesta) {
    return respuesta.json()
  })
  .then(function(informacion) {
    var peliculas = informacion.results

    for (var i = 0; i < peliculas.length; i++) {

      document.querySelector(".resultados").innerHTML += '<li> <a href="detalleDeUnaPelicula.html">   <img src="https://image.tmdb.org/t/p/original' + peliculas[i].poster_path + '" alt=""></a></li>'
    }
  })
})
