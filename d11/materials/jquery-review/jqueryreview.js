

console.log("2000")


$("div").css("background-color", "purple");


$("div").text("hey boo")
console.log("div")





// $("div#left-box").on("click", function() {
//   console.log("Asdadsda");
//   $("div#left-box").css("height", "500px");
//     $("div#left-box").css("width", "500px");

// });
// console.log("div#left-box")


$("div#right-box").on("click", function() {
  console.log("Asdadsda");
  $("div#right-box").text("hi silly");

});

//you can also use $("div#left-box").addclass("xx"); 
//to change an element. You would define a class in CSS and then you can add it using jQuery/JS

// $("div#left-box").on("click", function () {
//   clickcount = clickcount + 1;
//   if (clickcount === 1){
//     $("div#left-box").addClass("bigger");
//   } else {$("div#left-box").removeClass("bigger"); 
// clickcount = 0;
// }
//   }
// })


//if you wanted to make it get bigger and smaller 
//with every click, try something liek this:

// var shouldgetbigger = true; 

// $("div#left-box").on("click", function () {
  
//   if (shouldgetbigger === true){
//     $("div#left-box").addClass("bigger");
//     shouldgetbigger = true;
//   } else {$("div#left-box").removeClass("bigger"); 
// shouldgetbigger = true;
// }
//   }
// })

//but there's actually a built in jQuery thing called
//.toggleClass

$("div#left-box").on("click", function(){
  $("div#left-box").toggleClass("bigger");
})





