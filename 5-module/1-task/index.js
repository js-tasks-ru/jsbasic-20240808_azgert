function hideSelf() {
  const hiddenButton = document.querySelector('.hide-self-button');

  hiddenButton.addEventListener('click', function () {
    hiddenButton.setAttribute('hidden', 'true');
  });

}
