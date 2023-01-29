
$( document ).ready(function(){
    $( ".header__burger, .header__list" ).click(function(event){ // задаем функцию при нажатиии на элемент <div>
      $( ".header__burger, .header__menu" ).toggleClass("active"); // отображаем, или скрываем элемент
      $('body').toggleClass('lock');
    });
  });




  const menuLinks = document.querySelectorAll('.header__link[data-goto]');
  if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
      menuLink.addEventListener("click", onMenuLinkClick);
    });

    function onMenuLinkClick(e) {
      const menuLink = e.target;
      if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
          const gotoBlock = document.querySelector(menuLink.dataset.goto);
          const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

          window.scrollTo({
            top: gotoBlockValue,
            behavior: "smooth"
          });
          e.preventDefault();
      }
    }
}





window.addEventListener("load",function(){
  document.getElementById("loader").classList.toggle("loader2")
})
