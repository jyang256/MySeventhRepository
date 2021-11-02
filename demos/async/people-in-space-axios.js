let url = 'http://api.open-notify.org/astros.json';

axios.get(url).then((response) => {
  // response includes response.data
  let astronauts = response.data;
  let list = document.querySelector('ul');
  let items = astronauts.people.map((person) => {
    let li = document.createElement('li');
    li.textContent = `${person.name} on ${person.craft}`;
    return li;
  });
  list.replaceChildren(...items);
});
