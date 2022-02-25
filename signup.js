const firstNameValue = document.getElementById('firstName').value
const lastNameValue =  document.getElementById('lastName').value
const newpassValue =  document.getElementById('newpass').value
const emailValue =  document.getElementById('newemail').value
const API_URL = 'https://tkuelmfwvgrzbvyncons.supabase.co/auth/v1/signup'
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRrdWVsbWZ3dmdyemJ2eW5jb25zIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY0NTEzMDM5MCwiZXhwIjoxOTYwNzA2MzkwfQ.xO6WIhxzv4ngdiIVpz9DC9Wa0wOBrurvANuFsRjCfEw'
const signForm = document.getElementById('signup')

const emailValue = "THsahara@WFH.com";
const newpassValue = "Password1";

    signForm.addEventListener('submit',(event) => {

        event.preventDefault()

        signUp(email,password)
            .then(data => {
                if (data === true) {
                    window.location.href = "/index.html";
            }
        });


        async function signUp(email,password){

            const newStaff ={
                email: email,
                password: password
            }

            const signupUser = await fetch(`https://xvhrhlkmoaprvzmyyurp.supabase.co/auth/v1/signup`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh2aHJobGttb2FwcnZ6bXl5dXJwIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY0NDUwMjg4MCwiZXhwIjoxOTYwMDc4ODgwfQ._Nn8340qosB8uceqOqeVF4x-yeJiUz3MtXY30pDPeyY'
                },
                body: JSON.stringify(newUser)
            })

            return signUpUser.json()
        }})

