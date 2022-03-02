
$(document).ready(function(){
    



    $("a").css({"opacity": "1"});

    
    $(".title").css({"opacity": "1"});
  


    $(".navbar").hover(function(){

      $(".navbar").css({"background-color": "rgba(34, 34, 34, 0.549)"});
 
      $(".navbar> .section > a").css({"color": "white"});

    },
    function(){
        $(".navbar").css({"background-color": "white"});
        

        $(".navbar> .section > a").css({"color": "black"});
    });



    
    
    $(".footer").hover(function(){
        $(".footer").css({"background-color": "rgba(34, 34, 34, 0.549)"});

        $(".circle").css({"background-color": "white"});

        $(".footer > .footer-flex2 > .section > a").css({"color": "white"});
    },
    function(){
    
        $(".footer").css({"background-color": "white"});

        $(".circle").css({"background-color": "#658CAD"});

        $(".footer > .footer-flex2 > .section > a").css({"color": "black"});
    });







    $(".navbar> .section > a").hover(function(){
        $(".circle").css({"background-color": "#658CAD"});
        $(".navbar> .section > a:hover").css({"color": "black"});
    },
    function(){
        $(".navbar> .section > a").css({"color": "white"}); 
    });
 


    $(".footer > .footer-flex2 > .section > a").hover(function(){
        let selected = $(this).attr('class');
        
        $(`#${selected}`).css({"background": "black"});
        $(".footer > .footer-flex2 > .section > a:hover").css({"color": "black"});
    },
    function(){
        let selected = $(this).attr('class');
        
        $(`#${selected}`).css({"background": "white"});
        $(".footer > .footer-flex2 > .section > a").css({"color": "white"}); 
    });

    $(".circle").hover(function(){
     
        let hovered = $(this).attr('id');
        
        $(".circle:hover").css({"background": "black"});
        $(`.${hovered}`).css({"color": "black"});
    },
    function(){
        let hovered = $(this).attr('id');
        
        $(".circle").css({"background": "white"});
        $(`.${hovered}`).css({"color": "white"}); 
    });



    
    $("#a").click(function() {
        window.location.href = "../html/home.php";
    });
     $("#b").click(function() {
        window.location.href = "../html/about.php";
    }); 
    $("#c").click(function() {
        window.location.href = "../html/projects.php";
    });




});