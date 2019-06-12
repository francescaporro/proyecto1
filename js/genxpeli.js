window.addEventListener("load", function () {
  var queryString = location.search

  queryString = new URLSearchParams(queryString)

  var idGenero = queryString.get("id")
  var nombreGenero = queryString.get("nombre")
  document.querySelector('query')

  fetch('https://api.themoviedb.org/3/discover/movie?api_key=55e95e0127dd3fb1d9735ac5b1829c94&sort_by=popularity.des c&include_adult=true&include_video=true&page=1&with_genres=' + idGenero)
  .then(function(respuesta) {
    return respuesta.json()
  })
  .then(function(informacion) {
    var peliculas = informacion.results
    console.log(peliculas);

    for (var i = 0; i < peliculas.length; i++) {
      console.log(peliculas[i]);

      document.querySelector("#peliculasGenero").innerHTML += '<li> <a href="detalleDeUnaPelicula.html">   <img src="https://image.tmdb.org/t/p/original' + peliculas[i].poster_path + '" alt=""></a></li>'

    }
  })
})
