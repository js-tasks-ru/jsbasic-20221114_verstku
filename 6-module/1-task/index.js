/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  elem = null;
  #rows = [];


  constructor(rows) {
    this.#rows = rows || this.#rows;
    this.#render();
    this.#onTableClick();

  }

  #render() {
    const domTableBlock = document.createElement('table');
    domTableBlock.innerHTML = `
    <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Salary</th>
          <th>City</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        ${this.#rows.map((data) => {
      return `
      <tr>
          <td>${data.name}</td>
          <td>${data.age}</td>
          <td>${data.salary}</td>
          <td>${data.city}</td>
          <td><button data-action="remove">X</button></td>
        </tr>
      `
    }).join('')}
        
      </tbody>
    
    `;

    this.elem = domTableBlock;
  }

  #onTableClick = () => {
    this.elem.addEventListener('click', (event) => {
      let target = event.target;
      if (target.dataset.action == 'remove') {
        target.closest('tr').remove();
      }
    });
  };

}
