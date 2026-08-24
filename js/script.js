const btnGravador = document.getElementById("btn-gravador");
const statusGravacao = document.getElementById("status-gravacao");

// Quando o usuário pressionar o botão
btnGravador.addEventListener("pointerdown", () => {
    btnGravador.style.backgroundColor = "#e74c3c";
    btnGravador.textContent = "🔴 Gravando... Não solte!";

    statusGravacao.textContent = "Status: Capturando áudio...";
});

// Quando o usuário soltar o botão
btnGravador.addEventListener("pointerup", () => {
    btnGravador.style.backgroundColor = "#3498db";
    btnGravador.textContent = "🎤 Clique e Segure para Gravar";

    statusGravacao.textContent = "Status: Gravação concluída e enviada!";
});

        // Caso o toque seja cancelado (ex: chamada no celular)
btnGravador.addEventListener('pointercancel', () => {
  resetarBotao();
});
       const btnGravar = document.getElementById("btnGravar");
const audioPlayer = document.getElementById("audioPlayer");

let recorder;
let audioChunks = [];

btnGravar.addEventListener("click", async () => {

    // Começar gravação
    if (!recorder || recorder.state === "inactive") {

        const stream = await navigator.mediaDevices.getUserMedia({
            audio: true
        });

        recorder = new MediaRecorder(stream);
        audioChunks = [];

        recorder.ondataavailable = (event) => {
            audioChunks.push(event.data);
        };

        recorder.onstop = () => {

            const audioBlob = new Blob(audioChunks, {
                type: "audio/webm"
            });

            const audioURL = URL.createObjectURL(audioBlob);

            audioPlayer.src = audioURL;

            // Libera o microfone
            stream.getTracks().forEach(track => track.stop());
        };

        recorder.start();

        btnGravar.textContent = "⏹️ Parar gravação";

    } else {

        // Parar gravação
        recorder.stop();

        btnGravar.textContent = "🎙️ Gravar novamente";
    }
});

mediaRecorder.onstop = function () {

    const audioBlob = new Blob(audioChunks, {
        type: "audio/webm"
    });

    const audioURL = URL.createObjectURL(audioBlob);

    // Coloca o áudio no player
    audioPlayer.src = audioURL;

    // MOSTRA O CARD SOMENTE AGORA
    document.getElementById("cardAudio").style.display = "block";

    status.textContent = "Status: Gravação concluída e enviada!";

    stream.getTracks().forEach(track => track.stop());
};