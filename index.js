const loginForm = document.getElementById('login');
const errorDiv = document.getElementById('indexErr');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const guestLogin = document.getElementById('submit-guest');


// const email =
// const password =

    loginForm.addEventListener('submit',(event) =>{
        errorDiv.innerHTML = ""
        event.preventDefault();

        logIn(emailInput,passwordInput)
            .then(data => {
                if(data === true) {
                    window.location.href = "/dashboard.html"
                }
            })
    })

    async function logIn(emailInput, passwordInput) {

    };

    guestLogin.addEventListener('click',(evt) =>{
        evt.preventDefault();
        window.location.href='/dashboard.html';
    });

// function checkIsNotEmpty(domInput,errorMessage){
//     if (domInput.value === ""){
//         // alert("Email or Password Required!");
//         console.log(errorMessage);
//
//         const div = document.createElement('div');
//         div.innerHTML = `<p class="bg-gray-400 text-red-600 font-bold border-4"> ${errorMessage}</p>`;
//
//         errorDiv.appendChild(div);
//
//         return false;
//     }
//     return true;
}





