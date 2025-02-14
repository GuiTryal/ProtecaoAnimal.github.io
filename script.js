document.addEventListener("DOMContentLoaded", function () {
    toggleMenu(); // Executa ao carregar a página
    document.getElementById("emailForm").addEventListener("submit", enviarEmail);
});

// Função para abrir/fechar menu
function toggleMenu() {
    var navList = document.getElementById('nav-list');
    if (navList) {
        navList.classList.toggle('active');
    }
}

// Função para enviar email
function enviarEmail(event) {
    // Impede o envio padrão do formulário
    event.preventDefault();
    
    // Coleta os valores dos campos
    let mensagem = document.getElementById("mensagem").value;

    // Definir um limite de caracteres
    let limiteCaracteres = 1500;

    if (mensagem.length > limiteCaracteres) {
        alert(`Sua mensagem é muito longa! O limite é de ${limiteCaracteres} caracteres.`);
        return; // Interrompe a função para evitar erro no envio
    }

    // Define o assunto e monta o corpo da mensagem
    let assunto = "Contato do site de proteção animal";
    let corpo = encodeURIComponent(mensagem);

    // Monta o link mailto
    let mailtoLink = `mailto:guilherme.oliveira1906@hotmail.com?subject=${encodeURIComponent(assunto)}&body=${corpo}`;

    // Redireciona para o mailto
    window.location.href = mailtoLink;
}