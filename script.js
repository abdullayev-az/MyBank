

$(window).on('load', function(){
  setTimeout(removeLoader, 2000);
});
function removeLoader(){
    $( ".loader" ).fadeOut(500, function() {
    $( ".loader" ).remove(); 
  });   
   $('.homepage').fadeIn();
   $('.morepage').fadeIn();
   $('.settingpage').fadeIn();
}


var cards = document.querySelectorAll('.card');

[...cards].forEach((card)=>{
  card.addEventListener( 'click', function() {
    card.classList.toggle('is-flipped');
  });
});


