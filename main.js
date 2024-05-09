function tocaSom(seletorAudio) {
  const elemento = document.querySelector(seletorAudio);

  if (elemento && elemento.localName == 'audio') {
    elemento.play();
  } else {
    console.log('Elemento não encontrado ou seletor não encontrado.');
  }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let cont = 0; cont < listaDeTeclas.length; cont++) {
  const tecla = listaDeTeclas[cont];
  const instrumento = tecla.classList[1];
  const idAudio = `#som_${instrumento}`;

  tecla.onclick = function () {
    tocaSom(idAudio);
    console.log(instrumento);
  };

  tecla.onkeydown = function (evento) {
    if (evento.code === 'Space' || evento.code === 'Enter') {
      tecla.classList.add('ativa');
    }
  };

  tecla.onkeyup = function (evento) {
    if (evento.code === 'Space' || evento.code === 'Enter') {
      tecla.classList.remove('ativa');
    }
  };
}
