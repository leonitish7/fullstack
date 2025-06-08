const baseURL = 'https://www.programacionparatodos.com/p/mensajes-y-fotos-aleatorias-para-san.html';
const container = document.querySelector('.content');

const rows = 7;

for (let i = 0; i < rows * 3; i++) {
  const img = document.createElement('img');
  img.src = `${baseURL}${randomSize()}`;
  console.log(img.src)
  container.appendChild(img);
}

function randomSize() {
  return `${randomNumber()}x${randomNumber()}`;
}

function randomNumber() {
  return Math.floor(Math.random() * 10) + 300;
}
