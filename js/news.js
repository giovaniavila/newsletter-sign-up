const emailTitulo = document.getElementById('email-label');
const emailInput = document.getElementById('email-input');
const errorMessage = document.getElementById('email-error');
const formulario = document.getElementById('form')

//previnir se o usuário digitar errado
formulario.addEventListener('submit', (e) => {
    if(validateEmail() === false){
        e.preventDefault();
    }
})


function validateEmail(e){
    if(!emailInput.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)
    ){
        errorMessage.innerHTML = 'please put and valid email'
        emailInput.style.borderColor = "red"
        return false;
    } else{
        errorMessage.innerHTML = '';
        emailInput.style.borderColor = "green"
        return true
    }
}
