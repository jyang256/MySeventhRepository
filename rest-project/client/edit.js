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

function updateStudentDropDown() {}

updateStudentDropDown();
