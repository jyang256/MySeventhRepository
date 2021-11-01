let url = 'http://localhost:8000/students';

let form = document.getElementById('add-form');
let messageBox = document.getElementById('message-box');
let addButton = document.getElementById('add-button');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  addButton.disabled = true;
  let data = new FormData(form);
  let student = JSON.stringify(Object.fromEntries(data));

  axios({
    method: 'post',
    url,
    data: student,
    headers: { 'Content-Type': 'application/json' },
  }).then((response) => {
    let insertedStudent = response.data;
    messageBox.replaceChildren();
    messageBox.insertAdjacentHTML(
      'beforeend',
      `You can see the new student <a href="${url}/${insertedStudent.id}">here</a>.`
    );
    messageBox.hidden = false;
    messageBox.classList.add('message-update');
  });
});

form.addEventListener('change', () => {
  addButton.disabled = false;
  messageBox.hidden = true;
  messageBox.classList.remove('message-update');
});
