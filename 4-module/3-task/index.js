function highlight(table) {
  let td = table.querySelectorAll('td');

  td.forEach((elTd)=> {

    if (elTd.dataset.available === 'true') {
      elTd.parentElement.classList.add('available');
    } else if (elTd.dataset.available === 'false') {
      elTd.parentElement.classList.add('unavailable');


    } else if (!(elTd.hasAttribute('data-available'))) {
      elTd.parentElement.setAttribute('hidden', 'true');
    }

    if (elTd.textContent === 'm') {
      elTd.parentElement.classList.add('male');
    } else {
      elTd.parentElement.classList.add('female');
    }

    if (+(elTd.textContent) < 18) {
      elTd.parentElement.setAttribute('style', "text-decoration: line-through");
    }

  });
}
