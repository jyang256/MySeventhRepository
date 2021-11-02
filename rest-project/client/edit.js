let url = 'http://localhost:8000/students';

let form = document.getElementById('edit-form');
let messageBox = document.getElementById('message-box');
let editButton = document.getElementById('edit-button');
let selectStudentDropDown = document.getElementById('select-student');

selectStudentDropDown.addEventListener('change', async (event) => {
  let studentId = event.target.value;
  let { data: student } = await axios.get(`${url}/${studentId}`);

  for (let [name, value] of Object.entries(student)) {
    if (form.elements[name]) {
      form.elements[name].value = value;
    }
  }
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  editButton.disabled = true;
  let data = new FormData(form);
  let student = JSON.stringify(Object.fromEntries(data));

  axios({
    method: 'patch',
    url: url + '/' + data.get('id'),
    data: student,
    headers: { 'Content-Type': 'application/json' },
  }).then((response) => {
    let updatedStudent = response.data;
    messageBox.replaceChildren();
    messageBox.insertAdjacentHTML(
      'beforeend',
      `You can see the updated student <a href="${url}/${updatedStudent.id}">here</a>.`
    );
    messageBox.hidden = false;
    messageBox.classList.add('message-update');
    form.reset();
    updateStudentDropDown();
  });
});

form.addEventListener('change', () => {
  editButton.disabled = false;
  messageBox.hidden = true;
  messageBox.classList.remove('message-update');
});

function updateStudentDropDown() {
  let optionOne = selectStudentDropDown.options[0];

  axios.get(url).then((response) => {
    let students = response.data;
    let options = students.map((student) => {
      let option = document.createElement('option');
      option.textContent = student.firstName + ' ' + student.lastName;
      option.value = student.id;
      return option;
    });
    selectStudentDropDown.replaceChildren(optionOne, ...options);
    selectStudentDropDown.hidden = false;
  });
}

updateStudentDropDown();
