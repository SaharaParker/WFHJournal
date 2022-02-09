const loginForm = document.getElementById('login');
const errorDiv = document.getElementById('indexErr');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');

loginForm.addEventListener('submit',(event) =>{
    errorDiv.innerHTML = ""
    event.preventDefault();

    if(
        checkIsNotEmpty(usernameInput,"Username is required.")&&
        checkIsNotEmpty(passwordInput,"Password is required.")
    ){
        window.location.href='/dashboard.html';

    }
});

function checkIsNotEmpty(domInput,errorMessage){
    if (domInput.value === ""){
        // alert("Email or Password Required!");
        console.log(errorMessage);

        const div = document.createElement('div');
        div.innerHTML = `<p class="bg-gray-400 text-red-600 font-bold border-4"> ${errorMessage}</p>`;

        errorDiv.appendChild(div);

        return false;
    }
    return true;
}