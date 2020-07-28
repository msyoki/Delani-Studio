$(document).ready(function() {

    //what we do text toggle
    $(".design").click(function() {
        $(".shown-design").fadeToggle('slow');
        $(".hidden-design").fadeToggle('slow');
      });
  
      $(".development").click(function() {
          $(".shown-development").fadeToggle('slow');
          $(".hidden-development").fadeToggle('slow');
      });
  
      $(".management").click(function() {
          $(".shown-management").fadeToggle('slow');
          $(".hidden-management").fadeToggle('slow');
      }); 


    //portfolio text toggle 
    $('.card').hover(function(){
        $('.toggle-text',this).slideToggle('slow');
     }, function(){
        $('.toggle-text',this).fadeToggle('slow');
    });

    //form input validation
    $("#form").on('submit',function(event){
        event.preventDefault();
        let name = $("#name").val();
        let email = $("#email").val();
        let message = $("#message").val();

        if ($("input#name").val() && $("input#email").val()){
            alert ("Hello " + name +" ! Thank you for reaching out to us,we'll get back to you asap");
        }
        else {
            alert("Please provide your correct name and email!");
        }
    
    });

});

