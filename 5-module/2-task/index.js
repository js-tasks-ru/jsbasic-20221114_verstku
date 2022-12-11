function toggleText() {
  const btn = document.querySelector('.toggle-text-button');

  btn.addEventListener('click', function () {
    (text.hasAttribute('hidden')) ? text.removeAttribute('hidden') : text.setAttribute('hidden', '');
  }, false);
}
