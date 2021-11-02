import { movies } from '../../data/movies-module.js';

// Efficient, somewhat verbose
function useCreateElement() {
  console.log('Using document.createElement');
  const root = document.querySelector('#create-element');

  // Make sure it's empty
  root.replaceChildren();

  const list = document.createElement('ul');
  movies.forEach((movie) => {
    const item = document.createElement('li');
    item.textContent = `${movie.title} (${movie.year})`;
    // item.textContent = movie.title + ' (' + movie.year + ')';
    list.append(item);
  });

  // One repaint
  root.append(list);
}

// Efficient, less verbose
function useInsertAdjacentHTML() {
  console.log('Using element.insertAdjacentHTML()');
  const root = document.querySelector('#insert-adjacent-html');
  root.replaceChildren();

  const list = document.createElement('ul');
  movies.forEach((movie) => {
    list.insertAdjacentHTML(
      'beforeEnd',
      `<li>${movie.title} (${movie.year})</li>`
    );
  });

  // One repaint
  root.append(list);
}

// Inefficient, also easier to break
function useInnerHTML() {
  console.log('Using element.innerHTML');
  const root = document.querySelector('#inner-html');
  root.replaceChildren();
  let html = '<ul>';
  movies.forEach(
    (movie) => (html += `<li>${movie.title} (${movie.year})</li>`)
  );
  html += '</ul>';

  // One repaint, may trigger document-wide repaint
  root.innerHTML = html;
}

useCreateElement();
useInsertAdjacentHTML();
useInnerHTML();
