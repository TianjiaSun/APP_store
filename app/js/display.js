$(document).ready(function() {
  $("#overlay_container").hide();

  $(".app_unit").click(function() {
    $("#overlay_container").fadeIn(500);   
  });

  $(".overlay_close").click(function() {
    $("#overlay_container").hide();   
  });
})