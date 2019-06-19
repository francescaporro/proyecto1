window.addEventListener("load", function(){

  var urlSearchParams = new URLSearchParams(window.location.search)
  var idPelicula = urlSearchParams.get('idPelicula')
  console.log(idPelicula);

  var API_KEY = "55e95e0127dd3fb1d9735ac5b1829c94"
  var url = "https://api.themoviedb.org/3/movie/"+idPelicula+"?api_key="+API_KEY
  fetch(url)
    .then(function(response){
      return response.json();
    })
    .then(function(objetoLiteralRespuesta) {
      console.log(objetoLiteralRespuesta);

      var ul = document.querySelector('section ul')
      // PARTE FIJA DE LA URL DE LA IMAGEN
      var urlImg = "https://image.tmdb.org/t/p/original"

      var li = ""
      li = "<li>"
      li +=   "<p>"+ "Titulo:  "+objetoLiteralRespuesta.title+"</p>"
      li +=   "<img src='"+urlImg + objetoLiteralRespuesta.poster_path+"' style='width:300px;'>"
      li +=   "<p>"+ "Sinopsis:  "+objetoLiteralRespuesta.overview+"</p>"
      li +=   "<p>"+ "Idioma:  " +objetoLiteralRespuesta.original_language+"</p>"
      li +=   "<p>"+ "Popularidad:  " +objetoLiteralRespuesta.popularity+"</p>"
      li +=   "<p>"+ "Fecha de estreno:  " + objetoLiteralRespuesta.release_date+"</p>"


      li += "</li>"

      ul.innerHTML += li

    })
    .catch(function(error) {
      console.log("the error was: " + error);
    })
})
