// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */


$("#search-button").click(function(){
  $("h3").hide();
  $(".gallery").empty();
  let search_term = $("#search-term").val();
  let custom_api_link = `https://api.giphy.com/v1/gifs/search?q=${search_term}&rating=pg&api_key=dc6zaTOxFJmzC`;
  fetch(custom_api_link)
    .then(function(response){
      return response.json();
    })
    .then(function(data){
      for (i = 0; i < data.data.length ; i++) {
        let gif_data = data.data[i].images.original.url;
        $(".gallery").append(`<img src="${gif_data}">`);
      }
    });

});