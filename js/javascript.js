
$(document).ready(function(){
    
    var bool = true;
    $("a").css({"opacity": "1"});
    
    
    $(".title").css({"opacity": "1"});
//  if(window.scrollY <= 400){

//      $(".linkss").css({"color": "black"});
//      $("#hgb").css({"color": "rgb(89, 255, 189)"});

// }else if(window.scrollY >400 && window.scrollY <= 652){

//     $(".linkss").css({"color": "black"});
//     $("#me").css({ "color": "rgb(89, 255, 189)" });
    
// } else if (window.scrollY > 672 && window.scrollY <= 727) {
    
//     $("#me").css({ "color": "rgb(89, 255, 189)" });
//     $("#ss").css({ "color": "rgb(89, 255, 189)" });

// }else if(window.scrollY > 727 ){

//     $(".linkss").css({"color": "black"});
//     $("#ss").css({ "color": "rgb(89, 255, 189)" });
    
// }else{
//     $(".linkss").css({"color": "black"});
// }
  
    $(window).resize(function () {
        if ($(window).width() < 768) {
            
          $(".nav_links").removeAttr("style");
          $(".contact_box").removeAttr("style");
         
        }else{
            $(".nav_links").removeAttr("style");
            $(".contact_box").removeAttr("style");
           
        }
        
    });
   
$("#bars").click(function(){

    $(".nav_links").slideToggle(300);
    $(".contact_box").slideUp(300);
    $("#contacts").css({"color": "black"});

});



$("#contacts").click(function(){

   $(".contact_box").slideToggle(300, function(){

       
      bool = !bool;

      var color = bool ? "black" : "rgb(89, 255, 189)";

    $("#contacts").css({"color": color});
  });
});

$(window).scroll(function(){

if(window.scrollY < 100){
    
    $("#about_me").css({"opacity": "0","animation-name": ""});
  
}else if(window.scrollY >= 475){
    $("#about_me").css({"opacity": "1","animation-name": "aboutMe"});
 
}

if(window.scrollY < 700){
    $("#skills").css({"opacity": "0","animation-name": ""});
    
}else if(window.scrollY >= 1175){
    $("#skills").css({"opacity": "1","animation-name": "skills"});
}

if (window.scrollY < 1400) {
        $("#projects").css({"opacity": "0","animation-name": ""});
} else if (window.scrollY >= 1650) {
    $("#projects").css({"opacity": "1","animation-name": "projects"});
}


 if(window.scrollY < 475){

      $(".linkss").css({"color": "black"});
     $("#hgb").css({"color": "rgb(89, 255, 189)"});

 }
 else if (window.scrollY >= 475 && window.scrollY < 1175) {

  $(".linkss").css({"color": "black"});
    $("#me").css({ "color": "rgb(89, 255, 189)" });
    
 }
 else if (window.scrollY >= 1175 && window.scrollY < 1650) {
    
     $(".linkss").css({"color": "black"});
   $("#ss").css({ "color": "rgb(89, 255, 189)" });
 } else if (window.scrollY >= 1650) {
      $(".linkss").css({"color": "black"});
   $("#ps").css({ "color": "rgb(89, 255, 189)" });
 }
 // else if (window.scrollY > 727) {

//     $(".linkss").css({"color": "black"});
//     $("#ss").css({ "color": "rgb(89, 255, 189)" });
    
// }else{
//     $(".linkss").css({"color": "black"});
// }

});





});