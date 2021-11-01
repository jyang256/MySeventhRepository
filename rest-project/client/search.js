let url = 'http://localhost:8000/students';

document.querySelector('#search-button').addEventListener('click', () => {
  let searchName = document.querySelector('#search-name').value;

  axios
    .get(url, {
      params: {
        lastName_like: searchName,
      },
    })
    .then((response) => {
      let students = response.data;
      let list = document.querySelector('#search-results');
      let rows = generateRows(students);
      list.append(...rows);
      list.parentElement.hidden = false;
    });
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
