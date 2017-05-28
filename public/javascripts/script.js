$(function () {
  //if this is a food item show page (has expiration date div on it)
  if ($('.expirationDate').length > 0) {
    //if there is no expiration date entered
    if($('.expirationDate').html().length === 0) {
      //just empty the whole expiration date line
      $('.expiration_line').empty();
      //if there is an expiration date listed
    } else if ($('.expirationDate').html().length > 0) {
      var currentDate = new Date();
      //grab food expiration date from DOM and turn back into date object
      var expirationDate = new Date($('.expirationDate').html());

      //check whether expiration date has passed
      if (currentDate > expirationDate) {
        //add food is expired message to item show page
        $('.food_info').prepend('<p class="expiration_message">This food has expired</p>');
        $('.expirationDate').addClass('expired_date');
      }
       //change date format instead of ISO
      $('.expirationDate').html(expirationDate.toLocaleDateString());
    }
  }
});

