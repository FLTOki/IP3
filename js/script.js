const name = function getName(ev)
{
  ev.preventDefault();

  var clientName = function(name)
  {
    return('name');
  };

  var name =(document.getElementById('name').value);
  console.log(name);
  alert('Hi '+name+ ' we have received your response.');

  ev.reset();
}

document.addEventListener('DOMContentLoaded', function load()
{
  document.getElementById('button').addEventListener('click', name);
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

  $('.clicked-5').hover(function() {
    $('#showing-5').hide();
    $('#hidden-5').show();
  }, function() {
    $('#hidden-5').hide();
    $('#showing-5').show();
  });

  $('.clicked-6').hover(function() {
    $('#showing-6').hide();
    $('#hidden-6').show();
  }, function() {
    $('#hidden-6').hide();
    $('#showing-6').show();
  });

  $('.clicked-7').hover(function() {
    $('#showing-7').hide();
    $('#hidden-7').show();
  }, function() {
    $('#hidden-7').hide();
    $('#showing-7').show();
  });

  $('.clicked-8').hover(function() {
    $('#showing-8').hide();
    $('#hidden-8').show();
  }, function() {
    $('#hidden-8').hide();
    $('#showing-8').show();
  });

  $('.clicked-9').hover(function() {
    $('#showing-9').hide();
    $('#hidden-9').show();
  }, function() {
    $('#hidden-9').hide();
    $('#showing-9').show();
  });

  $('.clicked-10').hover(function() {
    $('#showing-10').hide();
    $('#hidden-10').show();
  }, function() {
    $('#hidden-10').hide();
    $('#showing-10').show();
  });
});
