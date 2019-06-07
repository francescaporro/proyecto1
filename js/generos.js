window.addEventListener("load", function () {
  var url = "https://api.themoviedb.org/3/genre/movie/list?api_key=55e95e0127dd3fb1d9735ac5b1829c94&language=en-US"
  var genurl = "https://api.themoviedb.org/3/discover/movie?api_key=55e95e0127dd3fb1d9735ac5b1829c94&sort_by=popularity.desc&include_adult=true&include_video=true&page=1&with_genres="
  fetch (url)
   .then (function (response) {
     return response.json();
   })

   .then (function (data) {
     console.log(data);

    var div = document.querySelector("div.dropdown-menu");
    var a = "";
    var arrayDeGeneros= data.genres
    console.log(arrayDeGeneros);
    var genero="";
    var id=0;
    for (var i = 0; i < arrayDeGeneros.length; i++) {
      genero = arrayDeGeneros[i].name;
      id= arrayDeGeneros[i].id;

      a = "<a class='dropdown-item' href=genxpeli.html?id=" + id + '&nombre=' + genero + '>'+ genero + "</a>"

      div.innerHTML+=a
    }

   })

   .catch (function (error) {
     console.log("Error" + error);
   })
})
