// 1. Create .click() handlers for each of the thumbnails: #first, #second, #third, #fourth
// 2. Use .attr() to change the `src` attribute of #bigimage to correspond to image that was clicked

//user clicks thumbnail
//grab thumbnail image
//change big image to the thumbnail

//$("img").attr("src", "http://2.gravatar.com/avatar/82906f474d6b29c9acbee0c231774332?s=256&d=retro&r=g");

$("img#first").on("click", function() {
  $("img#bigimage").attr("src","img/1.jpg");

})


$("img#second").on("click", function() {
  $("img#bigimage").attr("src","img/2.jpg");
  console.log("figure")

})

$("img#third").on("click", function() {
  $("img#bigimage").attr("src","img/3.jpg");
  console.log("figure")

})

$("img#fourth").on("click", function() {
  $("img#bigimage").attr("src","img/4.jpg");
  console.log("figure")

})
