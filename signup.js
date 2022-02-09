const signForm = document.getElementById('signup');
const errDiv = document.getElementById('signErr');
const firstInput = document.getElementById('firstName');
const lastInput = document.getElementById('lastName');
const newUsername = document.getElementById('newuser');
const newPassword = document.getElementById('newpass');
const emailInput = document.getElementById('email');


signForm.addEventListener('submit',(event) =>{
    errorDiv.innerHTML = ""
    event.preventDefault();

    if(
        checkIsNotEmpty(firstInput,"Enter Your First Name.")&&
        checkIsNotEmpty(lastInput,"Enter Your Last Name.")&&
        checkIsNotEmpty(newUsername,"Create a New Username.")&&
        checkIsNotEmpty(newPassword,"Create a New Password.")&&
        checkIsNotEmpty(lastInput,"Enter Your Email Address.")
    ){
        window.location.href = "/dashboard.html";

    }
});

function checkIsNotEmpty(dominput,errorMessage){
    const div = document.createElement('div');
    div.innerHTML = '<p></p>'

}