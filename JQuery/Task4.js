$(document).ready(function(){
    $("#header").click(function(){
        $(".a").css("background-color","green");
    });
});

$(document).ready(function(){
    $("#sidebar").click(function(){
        $("#sidebar").text("Leftbar");
    });
});
 
$(document).ready(function(){
    $("#extra").click(function(){
        $(".e").fadeOut(3000);
    });
});
