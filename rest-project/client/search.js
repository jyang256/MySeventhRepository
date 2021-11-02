let url = 'http://localhost:8000/students';

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
