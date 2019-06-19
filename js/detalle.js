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
      for (var i = 0; i < objetoLiteralRespuesta.genres.length; i++) {
        objetoLiteralRespuesta.genres[i]
        li +=   "<p><a href='genxpeli.html?id="+objetoLiteralRespuesta.genres[i].id+"&nombre="+objetoLiteralRespuesta.genres[i].name+"'>"+objetoLiteralRespuesta.genres[i].name+"</a></p>"
      }
      li += "</li>"

      var url = "https://api.themoviedb.org/3/movie/"+idPelicula+"/videos?api_key=55e95e0127dd3fb1d9735ac5b1829c94&language=en-US"
      fetch(url)
        .then(function(response){
          return response.json();
        })
        .then(function(objetoLiteralRespuesta) {
          console.log(objetoLiteralRespuesta);
          console.log(objetoLiteralRespuesta.results[0].key);
          var urlTrailer = '<div><iframe width="560" height="315" src="https://www.youtube.com/embed/' + objetoLiteralRespuesta.results[0].key + '" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>'
          ul.innerHTML += li
          ul.innerHTML += urlTrailer
        })
        .catch(function(error) {
          console.log("the error was: " + error);
        })

        document.querySelector(".recomendaciones").onclick= function() {
          document.querySelector('section ul.recomendaciones').classList.toggle('display-none')
        }
    })
    .catch(function(error) {
      console.log("the error was: " + error);
    })



    //RECOMENDACIONES PELI




    var url = 'https://api.themoviedb.org/3/movie/'+idPelicula+'/recommendations?api_key='+API_KEY+'&language=en-US&page=1'

    fetch(url)
      .then(function(response){
        return response.json();
      })
      .then(function(objetoLiteralRespuesta) {
        console.log(objetoLiteralRespuesta);

        var ul = document.querySelector('section ul.recomendaciones')
        // PARTE FIJA DE LA URL DE LA IMAGEN
        var urlImg = "https://image.tmdb.org/t/p/original"

        console.log(objetoLiteralRespuesta.results[1].title);
        var li = ""
        for (var i = 0; i < objetoLiteralRespuesta.results.length; i++) {

        li = "<li>"
        li +=   "<p>"+ "Titulo:  "+objetoLiteralRespuesta.results[i].title+"</p>"
        li +=   "<img src='"+urlImg + objetoLiteralRespuesta.results[i].poster_path+"' style='width:300px;'>"
        li +=   "<p>"+ "Sinopsis:  "+objetoLiteralRespuesta.results[i].overview+"</p>"
        li +=   "<p>"+ "Idioma:  " +objetoLiteralRespuesta.results[i].original_language+"</p>"
        li +=   "<p>"+ "Popularidad:  " +objetoLiteralRespuesta.results[i].popularity+"</p>"
        li +=   "<p>"+ "Fecha de estreno:  " + objetoLiteralRespuesta.results[i].release_date+"</p>"

        li += "</li>"
        //
        // var trailer = objetoLiteralRespuesta.key
        // console.log(trailer);
        // var urlTrailer = '<iframe width="560" height="315" src="https://www.youtube.com/embed/' + trailer + '" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
        ul.innerHTML += li
        // ul.innerHTML += urlTrailer
      }


    })
    .catch(function(error) {
      console.log("the error was: " + error);
    })

// var url = "https://api.themoviedb.org/3/movie/" + idPelicula + "/videos?api_key=55e95e0127dd3fb1d9735ac5b1829c94&language=en-US"
// var urlTrailer = ""
//
// fetch(url)
//   .then(function(response) {
//     return response.json()
//   })
//   .then(function(peli) {
//
//   })



})
