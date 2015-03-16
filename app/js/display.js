$(document).ready(function() {

  $(".app_unit").click(function() {
    $("#overlay_container").fadeIn(600);   
  });

  $(".overlay_close").click(function() {
    $("#overlay_container").hide();   
  });

  $(document).keyup(function(e){
    if(e.keyCode==27)
    $("#overlay_container").hide();   
  });
})