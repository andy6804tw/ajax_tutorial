
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


//post
const data={
	"product_card_name":"伸縮扣環",
	"product_card_detail": "NAC-85TH-SG",
  "product_card_img": [{"img":"http:image"}],
	"product_card_price":"6666.00",
	"product_card_content":"<h1>header</h1><p>類似得程式碼</p>"
}
fetch('https://435640db.ngrok.io/api/product/card',{
           method: 'POST',
           headers: {
               'Accept': 'application/json',
               'Content-Type': 'application/json'
           },
           body: JSON.stringify(data)
       }).then(function checkStatus(response) {
           if (response.status >= 200 && response.status < 300) {
               return response.json();
           } else {
               var error = new Error(response.statusText)
               error.response = response;
               throw error;
           }
       })
       .then(function(data) {
          console.log("done")
       	//完成
       }).catch(function(error) {
           console.log('request failed', error);
           return error.response.json();
       }).then(function(errorData){
          //失敗
       });
