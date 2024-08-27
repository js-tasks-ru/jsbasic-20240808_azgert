function toggleText() {
  const toggle = document.querySelector('.toggle-text-button');
  const text = document.querySelector('#text');

  toggle.addEventListener('click', function() {
    if (!(text.hasAttribute('hidden'))) {
      text.setAttribute('hidden', '');
    } else {
      text.toggleAttribute('hidden');
    }
    // if (!(text.hasAttribute('hidden'))) {
    //   text.setAttribute('hidden', '');
    // } else {
    //   text.removeAttribute('hidden');
    // }
  });

}
