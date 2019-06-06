window.onload = function() {
  fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=55e95e0127dd3fb1d9735ac5b1829c94&page=1&language=en-US&page=1")
    .then(function(respuesta) {
      return respuesta.json()
    })
    .then(function(informacion) {
      var peliculas = informacion.results

      for (var i = 0; i < peliculas.length; i++) {
        console.log(peliculas[i]);

        document.querySelector(".destacadas").innerHTML += '<li> <a href="detalleDeUnaPelicula.html">   <img src="https://image.tmdb.org/t/p/original' + peliculas[i].poster_path + '" alt=""></a></li>'
      }
    })

}
