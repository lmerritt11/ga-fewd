//when user clicks button
//open dropdown



 $("button.button-file").on("click", function() {
  // if ( $(".dropdown-file").css("display") === "block" ) {
  //   $(".dropdown-file").css("display", "none");    
  // } else {
  //   $(".dropdown-file").css("display", "block");  
  // }

  $(".dropdown-file").toggle();
 })

 $("button.button-edit").on("click", function() {
  // if ( $(".dropdown-file").css("display") === "block" ) {
  //   $(".dropdown-file").css("display", "none");    
  // } else {
  //   $(".dropdown-file").css("display", "block");  
  // }

  $(".dropdown-edit").toggle();
 })