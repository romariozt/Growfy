// ?Burger-Menu
// -------------------------------------//
"use strict"
document.addEventListener('click', documentClick);
function documentClick(e) {
  const targetItem = e.target;
  if (targetItem.closest('.icon-menu')) {
    document.documentElement.classList.toggle('menu-open');
  }
}





// ?Кнопка на верх
// -------------------------------------//
$(window).on('scroll', function () {
  if ($(this).scrollTop() > 700){
    $('#up').fadeIn()
  }else{
    $('#up').fadeOut()
  }
})

$('#up').on('click', function () {
  $('html, body').animate({scrollTop: 0}, 500)
})