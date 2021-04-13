$(document).ready(function() {
  const reply = function reply(ev)
  {
    ev.preventDefault();

    var clientName = function(name)
    {
      alert ('HI' +name+ 'We have received your message. Thank you');
    };

    var name =(document.getElementById('name').value);
    console.log(name);
  }



});
