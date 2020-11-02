const mapLink = document.querySelector('.company__map-link');
const popupMap = document.querySelector('.map');
const mapClose = popupMap.querySelector('.popup__close');

mapLink.addEventListener('click', function(evt) {
  evt.preventDefault();
  popupMap.classList.add('popup-open')
});

mapClose.addEventListener('click', function(evt) {
  evt.preventDefault();
  popupMap.classList.remove('popup-open')
});

window.addEventListener('keydown', function(evt) {
  if (evt.keyCode === 27) {
    if (popupMap.classList.contains('popup-open')) {
      evt.preventDefault();
      popupMap.classList.remove('popup-open')
    }
  }
});
