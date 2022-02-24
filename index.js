const loginForm = document.getElementById('login');
const errorDiv = document.getElementById('indexErr');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const API_URL = "https://tkuelmfwvgrzbvyncons.supabase.co";
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRrdWVsbWZ3dmdyemJ2eW5jb25zIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDUxMzAzOTAsImV4cCI6MTk2MDcwNjM5MH0.mzpR2uu1eH7weegTdq4lthnsVpcfLN6pJe3zNnWI8W4";


let allStaff = [
    {
        "id": 1,
        "created_at": "2022-02-23T00:10:14+00:00",
        "firstName": "Sahara",
        "lastName": "Parker",
        "email": "THsahara@WFH.com",
        "password": "Password1"
    },
    {
        "id": 2,
        "created_at": "2022-02-23T00:16:04+00:00",
        "firstName": "Naya",
        "lastName": "Nelson",
        "email": "nnelson@WFH.com",
        "password": "Password2\r\n"
    },
    {
        "id": 3,
        "created_at": "2022-02-23T00:16:53+00:00",
        "firstName": "Pete",
        "lastName": "Grey",
        "email": "peteg1@WFH.com",
        "password": "Password3"
    },
    {
        "id": 4,
        "created_at": "2022-02-23T00:17:47+00:00",
        "firstName": "Greg",
        "lastName": "Lambert",
        "email": "journalgl@WFH.com",
        "password": "Password4"
    }
]


// const email =
// const password =


let

{ email, password } = await supabase.auth.signIn({
    email: 'someone@email.com',
    password: 'ASeMruenSCZKiVMCPjZa'
})

console.log(allStaff);

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





