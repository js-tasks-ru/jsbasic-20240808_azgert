function camelize(str) {
  return str.split('-').map((el, i) => (i >= 1 ?
    el.charAt(0).toUpperCase() : el.charAt(0)) +
    el.slice(1)).join('');
}
