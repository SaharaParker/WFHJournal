const signFormEl = document.getElementById('signup')
const firstNameEl = document.getElementById('firstName').value
const lastNameEl = document.getElementById('lastName').value
const emailNameEl = document.getElementById('newemail').value
const passwordNameEl = document.getElementById('newpass').value
const API_URL = `https://tkuelmfwvgrzbvyncons.supabase.co/auth/v1/signup`
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRrdWVsbWZ3dmdyemJ2eW5jb25zIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY0NTEzMDM5MCwiZXhwIjoxOTYwNzA2MzkwfQ.xO6WIhxzv4ngdiIVpz9DC9Wa0wOBrurvANuFsRjCfEw'

const firstName = "Sahara";
const lastName = "Parker"
const email = "THsahara@WFH.com";
const password = "Password1";


    signFormEl.addEventListener('submit', (evt) => {
        evt.preventDefault()

        signUp(firstName, lastName, email, password)
            .then (data => {
                if (data === true) {
                    window.location.href = 'index.html'
                }
            })
    })


    async function signUp(firstName, lastName, email, password) {

        const signUpUser = await fetch(`https://tkuelmfwvgrzbvyncons.supabase.co/auth/v1/signup?apikey=${API_KEY}`)
    }