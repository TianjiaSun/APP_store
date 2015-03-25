$(document).ready(function() {

  $(".app_unit").click(function() {
    alert("hi");
  });

  $(document).keyup(function(e){
    if(e.keyCode==27)
    $("#overlay_container").hide();   
  });
})