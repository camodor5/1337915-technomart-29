const writeLink = document.querySelector('.company__email');
const writeUsPopup = document.querySelector('.write-us');
const writeClose = writeUsPopup.querySelector('.popup__close');

writeLink.addEventListener('click', function(evt) {
  evt.preventDefault();
  writeUsPopup.classList.add('popup-open')
});

writeClose.addEventListener('click', function(evt) {
  evt.preventDefault();
  writeUsPopup.classList.remove('popup-open')
});

window.addEventListener('keydown', function(evt) {
  if (evt.keyCode === 27) {
    if (writeUsPopup.classList.contains('popup-open')) {
      evt.preventDefault();
      writeUsPopup.classList.remove('popup-open')
    }
  }
});
