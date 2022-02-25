const signFormEl = document.getElementById('signup')
const firstNameEl = document.getElementById('firstName')
const lastNameEl = document.getElementById('lastName')
const emailNameEl = document.getElementById('newemail')
const passwordNameEl = document.getElementById('newpass')
const API_URL = `https://tkuelmfwvgrzbvyncons.supabase.co/auth/v1/signup`
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRrdWVsbWZ3dmdyemJ2eW5jb25zIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY0NTEzMDM5MCwiZXhwIjoxOTYwNzA2MzkwfQ.xO6WIhxzv4ngdiIVpz9DC9Wa0wOBrurvANuFsRjCfEw'

// const firstName = "Sahara";
// const lastName = "Parker"
// const email = "thsahara@WFH.com";
// const password = "Password1";


    signFormEl.addEventListener('submit', (evt) => {
        evt.preventDefault()
        console.log(evt.target[2].value)
        console.log(emailNameEl.value)
        console.log(passwordNameEl.value)

        signUp(emailNameEl.value, passwordNameEl.value)
            .then (data => {
                console.log(data)
                if (data.email !== undefined) {
                    window.location.replace('/all-entries.html')
                }
            })
    })


    async function signUp(email, password) {
        const newUser = {
            email: email,
            password: password
        }

        const signUpUser = await fetch(`https://tkuelmfwvgrzbvyncons.supabase.co/auth/v1/signup`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRrdWVsbWZ3dmdyemJ2eW5jb25zIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY0NTEzMDM5MCwiZXhwIjoxOTYwNzA2MzkwfQ.xO6WIhxzv4ngdiIVpz9DC9Wa0wOBrurvANuFsRjCfEw',
            },
            body: JSON.stringify(newUser)
        })
        const signedUpUser = await signUpUser.json()
        return signedUpUser

        // console.log(signUpUser)
        // return signUpUser.json()
    }