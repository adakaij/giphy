// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */

$("#search-button").click(function(){
  var choice = $("#search-term").val();
  $.ajax({
      url:"https://api.giphy.com/v1/gifs/search?q=" + choice + "&api_key=dc6zaTOxFJmzC",
      method: "GET",
      success: function(response){
          $("#display-gif").html(`<img src="${response.data[Math.floor(Math.random() * response.data.length)].images.original.url}"/>`);
          $(".text-center").hide();
      }
  })
});

$("#send-button").click(function(){
  var email = $("#send-term").val();
  //<a href=mailto:email class="link"></a>
});
