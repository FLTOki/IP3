$(document).ready(function() {
  $("form#inputform").submit(function(event) {
    event.preventDefault();

    var name = ($("#name").val());
    console.log('name');
    $("#output").text('Hi '+name+ ' we have received your response. Thank You');
  });

});

$(document).ready(function() {
  //CLICKABLES
  $('.clicked').click(function()
  {
    $('#showing').toggle();
    $('#hidden').toggle();
  });

  $('.clicked-1').click(function()
  {
    $('#showing-1').toggle();
    $('#hidden-1').toggle();
  });

  $('.clicked-2').click(function()
  {
    $('#showing-2').toggle();
    $('#hidden-2').toggle();
  });

  $('.output').click(function() {
    $('#output').hide();
  });

  // HOVERABLES
  $('.clicked-3').hover(function() {
    $('#showing-3').hide();
    $('#hidden-3').show();
  }, function() {
    $('#hidden-3').hide();
    $('#showing-3').show();
  });

  $('.clicked-4').hover(function() {
    $('#showing-4').hide();
    $('#hidden-4').show();
  }, function() {
    $('#hidden-4').hide();
    $('#showing-4').show();
  });

});
