



$("button").on("click", function() {
    var celsius = $('input').val();
    var fahrenheight = celsius * 9/5 + 32; 
    $("#converted").text(fahrenheight);
});

