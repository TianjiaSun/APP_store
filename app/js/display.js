$(document).ready(function() {

  $("#overlay_container").hide();

  $(".app_unit").click(function() {
    $("#overlay_container").show();
  });

  $(".overlay_close").click(function() {
    $("#overlay_container").hide();   
  });

  $(document).keyup(function(e){
    if(e.keyCode==27)
    $("#overlay_container").hide();   
  });
})