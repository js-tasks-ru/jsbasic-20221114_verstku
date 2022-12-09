function highlight(table) {
  for (let tableRow of table.tBodies[0].rows) {
    if (tableRow.cells[3].dataset.available && tableRow.cells[3].dataset.available == 'true') {
      tableRow.classList.add('available')
    } else if (tableRow.cells[3].dataset.available && tableRow.cells[3].dataset.available == 'false') {
      tableRow.classList.add('unavailable');
    }

    if (!tableRow.cells[3].dataset.available) tableRow.setAttribute('hidden', '');

    if (tableRow.cells[2].textContent == 'm') {
      tableRow.classList.add('male')
    } else if (tableRow.cells[2].textContent == 'f') {
      tableRow.classList.add('female')
    }

    if (tableRow.cells[1].textContent < 18) tableRow.style.textDecoration = 'line-through';

  }
}
