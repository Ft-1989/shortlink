$(document).ready(function(){

    $(".hamburger").click(function(){
        if($(".nav").css("display") == "none"){
            $(".nav").css("display", "block");
            $("body").css("overflow", "hidden");
        }else{
            $(".nav").css("display", "none");
            $("body").css("overflow", "unset");
        }          
    });

    const apiUrl = "https://api.shrtco.de/v2/shorten?url=";

    async function getLink(){

        const response = await fetch(apiUrl + document.querySelector(".link").value);
        var data = await response.json();

        $(".link").val(data.result.short_link);
    }

    $(".submit").click(function(){
        getLink();
    });


});