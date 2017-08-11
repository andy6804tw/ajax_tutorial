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