
function validationFields() {
  const nameInput = $('#nameInput');
  const emailInput = $('#emailInput');
  const bodyTextInput = $('#bodyTextInput');
  const result = $('#result');

  if (!nameInput.val()) {
    result.css('color', '#FF5454')
    result.text('Please fill in your name.');
    nameInput.focus();
    return false;
  }

  else if (!emailInput.val()) {
    result.css('color', '#FF5454')
    result.text('Please fill in your email.');
    emailInput.focus();
    return false;
  }

  else if (!bodyTextInput.val()) {
    result.css('color', '#FF5454')
    result.text('Write something.');
    bodyTextInput.focus();
    return false;
  }

  return true;
}

$(document).ready(() => {


  if($(window).width() <= 1100){
    $('#logo').attr('src', '../../assets/logo.svg')
  }else{
    $('#logo').attr('src', '../../assets/logo_white.svg')
  }

  $('form button').click(async () => {
    if (validationFields()) {

      const nameInput = $('#nameInput');
      const emailInput = $('#emailInput');
      const bodyTextInput = $('#bodyTextInput');
      const result = $('#result');

      $('button').text('sending...');

      await Email.send({
        SecureToken : "5b5cd05a-af71-4ea7-943d-36dc2e9499a5",
        To : 'brodticontact@gmail.com',
        From : emailInput.val(),
        Subject : `Brodi Contact - ${nameInput.val()}`,
        Body : bodyTextInput.val()
    }).then(
      message => {
        nameInput.val('');
        emailInput.val('');
        bodyTextInput.val('');
        $('#result').text('Your message was sent.');
        $('#result').css('color', '#11CEA2');

        $('button').text('send');
        console.log(message);
      }
    );
    }
  });
  
})