const loginForm = document.getElementById('login');
const errorDiv = document.getElementById('indexErr');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const API_URL = "https://x8ki-letl-twmt.n7.xano.io/api:qYNDeQ79/staff_ids";

loginForm.addEventListener('submit',(event) =>{
    errorDiv.innerHTML = ""
    event.preventDefault();

    if(
        checkIsNotEmpty(emailInput,"Email is required.")&&
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

fetch(`${API_URL}`)


{
    "id": 1,
    "created_at": 1644605690672,
    "name": "Sahara Parker",
    "email": "sahara@WFH.com"
},
{
    "id":2,
    "created_at":1644605748762,
    "name":"Naya Nelson",
    "email":"nnelson@WFH.com"
},
{"id":3,
    "created_at":1644605790178,
    "name":"Pete Grey",
    "email":"peteg1@WFH.com"
},
{
    "id":4,
    "created_at":1644605822800,
    "name":"Greg Lambert",
    "email":"journalgl@WFH.com"
},
{
    "id":5,
    "created_at":1644607808869,
    "name":"Kim Anne",
    "email":"kimberly@WFH.com"
}