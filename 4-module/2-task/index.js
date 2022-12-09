function makeDiagonalRed(table) {
  let i = 0;
  for (let tableRow of table.rows) {
    tableRow.cells[i].style.background = 'red';
    i++;
  }
}
