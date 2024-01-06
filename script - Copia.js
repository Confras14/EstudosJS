let x = 1;

function handleClique() {
  x++;
  const teste1 = document.querySelector('#teste1');
  const ul = teste1.querySelector('ul');

  const newUl = document.createElement('ul');

  for (let i = 0; i < 10; i++) {
    let newLi = document.createElement('li');
    newLi.innerText = `New item number: ${i + 1}`;
    newUl.appendChild(newLi);
  }

  const clonedUl = ul.cloneNode(true); // Clone o elemento ul existente

  (x % 2 !== 0) ? ul.before(newUl) : ul.after(newUl);

  console.log(x % 2);
}

const bt = document.querySelector('.bt');
bt.addEventListener('click', handleClique);
