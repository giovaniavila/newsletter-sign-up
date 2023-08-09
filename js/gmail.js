function sendEmail(){
    Email.send({
        SecureToken : "your secutiry token",
        Host : "smtp.elasticemail.com",
        Username : "giovani.avila.dev@gmail.com",
        Password : "your smtp password",
        To : document.getElementById('email-input').value,
        From : "giovani.avila.dev@gmail.com",
        Subject : "Bem-vindo! 🎉",
        Body : "É com grande satisfação que lhe damos as boas-vindas à nossa comunidade! <br><br> Agradecemos por se inscrever em nossa lista de e-mails e por permitir que façamos parte da sua jornada. <br> Estamos empolgados em tê-lo(a) a bordo e mal podemos esperar para compartilhar com você todas as novidades, informações e recursos exclusivos que temos preparados. Compartilhar conhecimento e construir um relacionamento significativo com nossos clientes é a nossa prioridade. <br> Nosso compromisso é fornecer conteúdo valioso e relevante diretamente na sua caixa de entrada. Prepare-se para receber:<br><br> 📌 Atualizações Exclusivas: Fique por dentro das últimas tendências do setor, notícias da empresa e muito mais.<br><br> 🔥 Dicas Especializadas: Aproveite os conselhos e dicas de nossos especialistas para aprimorar suas atividades e alcançar seus objetivos.<br><br> 🎉 Ofertas Especiais: Como parte de nossa comunidade, você terá acesso a promoções e ofertas especiais feitas sob medida para você.<br><br> Agradecemos por escolher se juntar a nós e esperamos que você tenha uma experiência incrível aqui. Se você tiver alguma dúvida, sugestão ou apenas quiser bater um papo, não hesite em nos contatar. Estamos aqui para ajudar!<br> Mais uma vez, bem-vindo(a) à nossa comunidade. Estamos ansiosos para construir um relacionamento duradouro e benéfico com você.<br> <br>Atenciosamente, <br><br> Giovani C Avila"
    }).then( 
        message => alert('email registered successfully')
    );
     return true
    }