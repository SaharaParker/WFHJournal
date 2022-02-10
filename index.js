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

let loginInfo = [
    {
        "id":2,
        "created_at":1644526253767,
        "First_Name":"Naya",
        "Last_Name":"Nelson",
        "Email":"nnelson@WFH.com",
        "Username":"NNJournal"
    },
    {
        "id":3,
        "created_at":1644526298324,
        "First_Name":"Pete",
        "Last_Name":"Grey",
        "Email":"peteg1@WFH.com",
        "Username":"GreyWFH1"
    },
    {
        "id":4,
        "created_at":1644526340399,
        "First_Name":"Greg",
        "Last_Name":"Lambert",
        "Email":"journalgl@WFH.com",
        "Username":"GLamb22"
    },
    {
        "id":1,
        "created_at":1644526223600,
        "First_Name":"Sahara",
        "Last_Name":"Parker",
        "Email":"sahara@WFH.com",
        "Username":"THsahara"
    }];