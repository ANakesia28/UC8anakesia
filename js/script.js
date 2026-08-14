// const btnGravador = document.getElementById("btn-gravador");
// const statusGravacao = document.getElementById("status-gravacao");


// //funçao para iniciar gravacao
// function pararGravacao() {
//     btnGravador.style.backgroundColor = "#3498db";
//     btnGravador.textContent = " Clique e Segure para Gravar";
//     statusGravacao.textContent = "Status: Pronto para gravar";
// }

// //captura eventos de pressionar e soltar o botão
// btnGravador.addEventListener("touchstart", pararGravacao);
// btnGravador.addEventListener("touchend", pararGravacao);

// // Quando o usuário pressionar o botão
// btnGravador.addEventListener("pointerdown", () => {
//     btnGravador.style.backgroundColor = "#e74c3c";
//     btnGravador.textContent = "🔴 Gravando... Não solte!";

//     statusGravacao.textContent = "Status: Capturando áudio...";
// });

// // Quando o usuário soltar o botão
// btnGravador.addEventListener("pointerup", () => {
//     btnGravador.style.backgroundColor = "#3498db";
//     btnGravador.textContent = "🎤 Clique e Segure para Gravar";

//     statusGravacao.textContent = "Status: Gravação concluída e enviada!";
// });

//         // Caso o toque seja cancelado (ex: chamada no celular)
// btnGravador.addEventListener('pointercancel', () => {
//   resetarBotao();
// });

// Seleção dos elementos HTML

const btn = document.getElementById('btn-gravador');

const status = document.getElementById('status-gravacao');



// Evento: Quando o usuário coloca o dedo no botão

btn.addEventListener('touchstart', (evento) => {

    // Impede zooms e seleções de texto indesejadas no celular

    evento.preventDefault();



    // Altera a cor e os textos para o modo de gravação

    btn.style.backgroundColor = '#e74c3c';

    btn.innerText = '🔴 Gravando... Não solte!';

    status.innerText = 'Status: Capturando áudio...';

});



// Evento: Quando o usuário remove o dedo do botão

btn.addEventListener('touchend', () => {

    // Restaura o botão e atualiza o status de envio

    btn.style.backgroundColor = '#3498db';

    btn.innerText = '🎤 Clique e Segure para Gravar';

    status.innerText = 'Status: Gravação concluída e enviada!';

});

Hoje













