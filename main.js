const listaDeTeclas = document.querySelectorAll('.tecla');

/*o document.querySelectorAll() é útil quando precisamos selecionar 
uma lista com vários elementos */

function tocaSom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio); 
 
    if (elemento && elemento.localName === 'audio') {
        elemento.play(); //a função play() é uma função própria do javascript, assim como onclick(), add() etc
    }
    else {
        console.log('Seletor inválido ou elemento não encontrado');
    }
}


for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador]; // o índice é útil para indicar a qual elemento estamos nos referindo
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; // template string
    console.log(idAudio);

    tecla.onclick = function() { // onclick é a ação que deve ser feita quando o usuário clicar no elemento 
        tocaSom(idAudio);
    };

    tecla.onkeydown = function (evento) {
        if (evento.code === "Space" || evento.code === "Enter") {
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
} 
