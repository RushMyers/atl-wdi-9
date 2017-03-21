$(function() {
$(".get-gif").click(function() {

// below giving us a JSON object.  Their server is programmed to do this. this is
// jQuery's same syntax for DOM manipulation but it is doing Ajax
$.get('http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&rating=pg')

// once we get the JSON...
  .done(function(data){
    console.log(data);

// set our image to the image url(which is randomly generated)
    var img = data.data.image_url;
    $("img").attr('src', img);
});
});
});
