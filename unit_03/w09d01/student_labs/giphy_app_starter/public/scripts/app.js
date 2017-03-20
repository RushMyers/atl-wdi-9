$(function() {
$(".get-gif").click(function() {
$.get('http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&rating=pg')
  .done(function(data){
    console.log(data);
    var img = data.data.image_url;
    $("img").attr('src', img);
});
});
});
