//import { data } from '../../data/students-module.js';

function generateRows(students) {
  let rows = students.map((student) => {
    let table = document.getElementById('list-body');
    let row = document.createElement('tr');
    row.insertAdjacentHTML(
      'beforeend',
      `
    <td>${student.firstName}</td>
    <td>${student.lastName}</td>
    <td>${student.location}</td>
    `
    );
    table.append(row);
    return row;
  });
  return rows;
};
axios.get('http://localhost:8000/students').then(resp => {
    generateRows(resp.data);

    // let items = table.students.map((student) => {
    //   let td = document.createElement('td');
    //   td.textContent = `${student.firstName}`;
    //   td.textContent = `${student.lastName}`;
    //   return td;
    // });
    // table.replaceChildren(...items);
});