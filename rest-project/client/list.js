// import { data } from '../../data/students-module.js';

let url = 'http://localhost:8000/students';

axios.get(url).then((response) => {
  let students = response.data;
  let list = document.querySelector('#list-body');
  let rows = generateRows(students);
  list.append(...rows);
});

function generateRows(students) {
  let rows = students.map((student) => {
    let row = document.createElement('tr');
    row.insertAdjacentHTML(
      'beforeend',
      `
    <td>${student.firstName}</td>
    <td>${student.lastName}</td>
    <td>${student.location}</td>
    `
    );
    return row;
  });
  return rows;
}
