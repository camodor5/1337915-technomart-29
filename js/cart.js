var cart = document.querySelector('.main-menu__cart');
var cartSpan = cart.querySelector('span');
var red = "#ee3643";

if (cartSpan.textContent > 0) {
  cart.style.backgroundColor = red;
};
