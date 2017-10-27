
$(document).ready(function(){
  $.ajax({
  method: "GET",
  url: "https://randomuser.me/api/",
  })
  .done(function( msg ) {
                console.log(msg.results[0].email);
    var email=msg.results[0].email;
    $('div').append(email);
  });
});

fetch('http://f57de011.ngrok.io/product/', {method: 'get'})
.then(function(response) {
    //處理 response
    response.json().then(function(data) {
      // do something with your data
      console.log(data[0].product_name)
    });
    
}).catch(function(err) {
    // Error :(
})