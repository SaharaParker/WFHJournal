const loginForm = document.getElementById('login');
const errorDiv = document.getElementById('indexErr');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const guestLogin = document.getElementById('submit-guest');

const API_URL = 'https://tkuelmfwvgrzbvyncons.supabase.co/auth/v1/token?grant_type=password'
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRrdWVsbWZ3dmdyemJ2eW5jb25zIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY0NTEzMDM5MCwiZXhwIjoxOTYwNzA2MzkwfQ.xO6WIhxzv4ngdiIVpz9DC9Wa0wOBrurvANuFsRjCfEw'

loginForm.addEventListener('submit', (evt) => {
    evt.preventDefault()
    console.log(evt.target[2].value)
    console.log(emailInput.value)
    console.log(passwordInput.value)

    logIn(emailInput.value, passwordInput.value)
        .then (data => {
            console.log(data)
            if (data.email === "") {
                window.location.replace('/all-entries.html')
            }
        })
})


async function logIn(email, password) {
    const existUser = {
        email: email,
        password: password
    }

    const logInUser = await fetch(`https://tkuelmfwvgrzbvyncons.supabase.co/auth/v1/token?grant_type=password`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRrdWVsbWZ3dmdyemJ2eW5jb25zIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY0NTEzMDM5MCwiZXhwIjoxOTYwNzA2MzkwfQ.xO6WIhxzv4ngdiIVpz9DC9Wa0wOBrurvANuFsRjCfEw',
        },
        body: JSON.stringify(existUser)
    })
    const loggedInUser = await logIn.json()
    return loggedInUser

}

    loginForm.addEventListener('submit',(event) => {
        errorDiv.innerHTML = ""
        event.preventDefault();

        if (
            checkIsNotEmpty(emailInput, "Email is required.") &&
            checkIsNotEmpty(passwordInput, "Password is required.")
        ) {

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

guestLogin.addEventListener('click',(evt) =>{
    evt.preventDefault();
    window.location.href='/dashboard.html'
})




