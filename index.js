const loginForm = document.getElementById('login');
const errorDiv = document.getElementById('indexErr');
const username = document.getElementById('username');
const password = document.getElementById('password');

loginForm.addEventListener('submit',(event) =>{
    errorDiv.innerHTML = ""
    event.preventDefault();
});