var menu = document.querySelector(".menu-btn");
var menuClose = true;
var navigation = document.querySelector(".main-navigation");
var close =  document.querySelector(".menu-close");
var callBtn = document.querySelector(".call-btn");
var modalContent = document.querySelector(".modal-content");
var modalContentClose = document.querySelector(".modal-content-close");

menu.addEventListener("click", function(event) {
  event.preventDefault();
  if (menuClose) {
    navigation.classList.add("main-navigation-show");
    /*close.classList.add("menu-close-show");*/
    menuClose = false;
  } else {
    navigation.classList.remove("main-navigation-show");
    /*close.classList.remove("menu-close-show");*/
    menuClose = true;
  }
});

close.addEventListener("click", function(event) {
  event.preventDefault();
  navigation.classList.remove("main-navigation-show");
  /*close.classList.remove("menu-close-show");*/
  menuClose = true;
});
callBtn.addEventListener("click", function(event) {
  event.preventDefault();
  modalContent.classList.add("modal-content-show");
});
modalContentClose.addEventListener("click", function(event) {
  event.preventDefault();
  modalContent.classList.remove("modal-content-show");
});