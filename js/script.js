// Função para resgistrar logs no painel
const painelLog = document.getElementById('log-painel');

function registrarLog(mensagem) {
    
    const novaLinha = document.createElement('div');
    novaLinha.textContent = mensagem;
    painelLog.appendChild(novaLinha);

};

// Evento de Mouse
const btnClique = document.getElementById('btn-clique');
const areaMouse = document.getElementById('area-mouse');

btnClique.addEventListener('click', function() {
    registrarLog("[CLIQUE] Evento de mouse: Evento 'click' detectado!");
});

// Evento de Mouse: mouseover
areaMouse.addEventListener('mouseover', function() {
    areaMouse.textContent = "Mouse sobre a área!";
    areaMouse.style.backgroundColor = "#09aa11";
    registrarLog("[MOUSE SOBRE] Evento de mouse: Evento 'mouseover' detectado!");
});

// Evento de Mouse: mouseleave
areaMouse.addEventListener('mouseleave', function() {
    areaMouse.textContent = "Mouse saiu da área!";
    areaMouse.style.backgroundColor = "#ff0a0a";
    registrarLog("[MOUSE SAIU] Evento de mouse: Evento 'mouseleave' detectado!");
});
