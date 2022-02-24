const firstNameValue = "Sahara"
const lastNameValue = "Parker"
const newpassValue = "Password1"
const emailValue = "THsahara@WFH.com"
const API_URL = "https://tkuelmfwvgrzbvyncons.supabase.co";
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRrdWVsbWZ3dmdyemJ2eW5jb25zIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDUxMzAzOTAsImV4cCI6MTk2MDcwNjM5MH0.mzpR2uu1eH7weegTdq4lthnsVpcfLN6pJe3zNnWI8W4";

const signForm = document.getElementById('signup');
// const errDiv = document.getElementById('signErr');
// const firstNameInput = document.getElementById('firstName').value;
// const lastNameInput = document.getElementById('lastName').value;
// const newPassword = document.getElementById('newpass').value;
// const emailInput = document.getElementById('newemail').value;

    signForm.addEventListener('submit',(event) => {

        event.preventDefault()

        newStaff(firstNameValue, lastNameValue, emailValue, newpassValue)
            .then(data => {
                if (data === true) {
                    window.location.href = "/index.html";
            }
    })

    async function newStaff(){
            return true
        }
    })

// signForm.addEventListener('submit',(event) =>{
//     errDiv.innerHTML = ""
//     event.preventDefault();
//
//     if(
//         checkIsNotEmpty(firstNameInput,"Enter Your First Name.")&&
//         checkIsNotEmpty(lastNameInput,"Enter Your Last Name.")&&
//         checkIsNotEmpty(newPassword,"Create a New Password.")&&
//         checkIsNotEmpty(emailInput,"Enter Your Email Address.")
//     ){
//         window.location.href = "/index.html";
//
//     }
// });

// function checkIsNotEmpty(domInput,errorMessage){
//     if (domInput.value === ""){
//         console.log(errorMessage);
//
//         const div = document.createElement('div');
//         div.innerHTML = `<p class="bg-gray-400 text-red-600 font-bold border-4">${errorMessage}</p>`;
//
//         errDiv.appendChild(div);
//
//      return false;
//     }
//     return true;
// }}