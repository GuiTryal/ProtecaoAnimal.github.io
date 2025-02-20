document.addEventListener("DOMContentLoaded", function () {
    // Inicializa o EmailJS com sua chave pública
    try {
      emailjs.init("k62wTDLRoPZvBeiAw"); // Substitua por sua chave pública correta
      console.log("EmailJS inicializado com sucesso.");
    } catch (e) {
      console.error("Erro ao inicializar o EmailJS:", e);
    }
    
    // Adiciona o evento de submit no formulário de email
    var emailForm = document.getElementById("emailForm");
    if (emailForm) {
      emailForm.addEventListener("submit", enviarEmail);
    } else {
      console.error("Formulário de email não encontrado.");
    }
    
  });
  
  // Função para alternar o menu (exposta globalmente)
  function toggleMenu() {
    var navList = document.getElementById('nav-list');
    if (navList) {
      navList.classList.toggle('active');
    }
  }
  
  // Função para enviar o email usando EmailJS
  function enviarEmail(event) {
    event.preventDefault();
  
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let mensagem = document.getElementById("mensagem").value;
  
    // Cria o objeto de parâmetros conforme seu template no EmailJS.
    // Ajuste os nomes dos campos conforme o que seu template espera.
    let parametros = {
      from_name: nome,
      user_email: email,   // Se o template espera "user_email", mantenha-o assim; se for "reply_to", altere
      message: mensagem
    };
  
    console.log("Enviando email com os parâmetros:", parametros);
  
    emailjs.send("service_x8zektu", "template_lqumyaa", parametros)
      .then(function (response) {
        alert("E-mail enviado com sucesso!");
        document.getElementById("emailForm").reset();
      })
      .catch(function (error) {
        alert("Erro ao enviar o e-mail. Tente novamente.");
        console.error("Erro:", error);
      });
  }
  