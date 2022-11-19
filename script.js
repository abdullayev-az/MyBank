

$(window).on('load', function(){
  setTimeout(removeLoader, 2000);
});
function removeLoader(){
    $( ".loader" ).fadeOut(500, function() {
    $( ".loader" ).remove(); 
  });   
}


var cards = document.querySelectorAll('.card');

[...cards].forEach((card)=>{
  card.addEventListener( 'click', function() {
    card.classList.toggle('is-flipped');
  });
});

/* $('.home').click(function(){
  $(this).css({'box-shadow':'inset 0 5px 10px rgba(0, 0, 0, 0.3)'});
  $('.setting').css({'box-shadow':'none'});
  $('.more').css({'box-shadow':'none'});
  $('.more p').text('');
  $('.setting p').text('');
  $('.home p').text('Home');
})
$('.more').click(function(){
  $(this).css({'box-shadow':'inset 0 5px 10px rgba(0, 0, 0, 0.3)'});
  $('.more p').text('More');
  $('.home').css({'box-shadow':'none'});
  $('.home p').text('');
  $('.setting p').text('');
  $('.setting').css({'box-shadow':'none'});
})
$('.setting').click(function(){
  $(this).css({'box-shadow':'inset 0 5px 10px rgba(0, 0, 0, 0.3)'});
  $('.home').css({'box-shadow':'none'});
  $('.more').css({'box-shadow':'none'});
  $('.more p').text('');
  $('.home p').text('');
  $('.setting p').text('Setting');
}) */
