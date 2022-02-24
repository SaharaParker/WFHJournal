const firstNameValue = "Sahara"
const lastNameValue = "Parker"
const newpassValue = "Password1"
const emailValue = "THsahara@WFH.com"
const API_URL = "https://tkuelmfwvgrzbvyncons.supabase.co";
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRrdWVsbWZ3dmdyemJ2eW5jb25zIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDUxMzAzOTAsImV4cCI6MTk2MDcwNjM5MH0.mzpR2uu1eH7weegTdq4lthnsVpcfLN6pJe3zNnWI8W4";

const signForm = document.getElementById('signup');

    signForm.addEventListener('submit',(event) => {

        event.preventDefault()

        newStaff(firstNameValue, lastNameValue, emailValue, newpassValue)
            .then(data => {
                if (data === true) {
                    window.location.href = "/index.html";
            }
    })

    async function newStaff() {

            const signUser = await fetch(`https://tkuelmfwvgrzbvyncons.supabase.co`)
        }
    }

