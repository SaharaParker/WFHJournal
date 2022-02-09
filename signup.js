const signForm = document.getElementById('signup');
const errDiv = document.getElementById('signErr');
const firstInput = document.getElementById('firstName');
const lastInput = document.getElementById('lastName');
const newUsername = document.getElementById('newuser');
const newPassword = document.getElementById('newpass');
const emailInput = document.getElementById('email');


signForm.addEventListener('submit',(event) =>{
    errDiv.innerHTML = ""
    event.preventDefault();

    if(
        checkIsNotEmpty(firstInput,"Enter Your First Name.")&&
        checkIsNotEmpty(lastInput,"Enter Your Last Name.")&&
        checkIsNotEmpty(newUsername,"Create a New Username.")&&
        checkIsNotEmpty(newPassword,"Create a New Password.")&&
        checkIsNotEmpty(emailInput,"Enter Your Email Address.")
    ){
        window.location.href = "/dashboard.html";

    }
});

function checkIsNotEmpty(domInput,errorMessage){
    if (domInput.value === ""){


    const div = document.createElement('div');
    div.innerHTML = '<p class="bg-gray-400 text-red-600 font-bold border-4">${errorMessage}</p>';

    errDiv.appendChild(div);

    return false;
}

    return true;
}