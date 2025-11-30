// Função Temporal: Verifica se a loja está aberta
function verificarFuncionamento() {
    const dataAtual = new Date();
    const hora = dataAtual.getHours();
    const diaSemana = dataAtual.getDay(); // 0 = Domingo, 6 = Sábado
    
    const elementoStatus = document.getElementById("statusLoja");
    
    // Aberto todos os dias, das 8h às 20h
    
    let estaAberto = false;

    if (hora >= 8 && hora < 20) { 
        estaAberto = true;
    }

    if (estaAberto) {
        elementoStatus.innerHTML = "<span class='badge bg-success'>🟢 ESTAMOS ABERTOS AGORA</span>";
    } else {
        elementoStatus.innerHTML = "<span class='badge bg-danger'>🔴 ESTAMOS FECHADOS (Horário: 08:00 às 20:00)</span>";
    }
}

//Função de Cálculo de Preço (Agendamento)
function atualizarPreco() {
    // Pega os elementos do formulário HTML
    const isTeleBusca = document.getElementById('teleBusca').checked;
    const totalDisplay = document.getElementById('totalDisplay');
    const taxaDisplay = document.getElementById('taxaEntregaDisplay');

    // Lógica de cálculo
    if (isTeleBusca) {
        taxaDisplay.innerText = "Taxa de deslocamento: R$ 25,00";
        totalDisplay.innerText = "Total Estimado: R$ 105,00"; // 80 + 25
    } else {
        taxaDisplay.innerText = "Taxa de deslocamento: R$ 0,00";
        totalDisplay.innerText = "Total Estimado: R$ 80,00";
    }
}


window.onload = function() {
    verificarFuncionamento();
};