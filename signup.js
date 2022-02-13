const signForm = document.getElementById('signup');
const errDiv = document.getElementById('signErr');
const nameInput = document.getElementById('firstName');
const newPassword = document.getElementById('newpass');
const emailInput = document.getElementById('email');


signForm.addEventListener('submit',(event) =>{
    errDiv.innerHTML = ""
    event.preventDefault();

    if(
        checkIsNotEmpty(nameInput,"Enter Your First Name.")&&
        checkIsNotEmpty(newPassword,"Create a New Password.")&&
        checkIsNotEmpty(emailInput,"Enter Your Email Address.")
    ){
        window.location.href = "/login.html";

    }
});

function checkIsNotEmpty(domInput,errorMessage){
    if (domInput.value === ""){
        console.log(errorMessage);

        const div = document.createElement('div');
        div.innerHTML = `<p class="bg-gray-400 text-red-600 font-bold border-4">${errorMessage}</p>`;

        errDiv.appendChild(div);

     return false;
    }
    return true;
}