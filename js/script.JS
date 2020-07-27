$(document).ready(function() {
    $(".design").click(function() {
      $(".shown-design").toggle();
      $(".hidden-design").toggle();
    });

    $(".development").click(function() {
        $(".shown-development").toggle();
        $(".hidden-development").toggle();
    });

    $(".management").click(function() {
        $(".shown-management").toggle();
        $(".hidden-management").toggle();
    }); 


    $('.card').hover(function(){
        $('.toggle-text',this).slideToggle('slow');
     }, function(){
        $('.toggle-text',this).fadeToggle('slow');
     });





});

