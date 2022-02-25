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

        newStaff(email,password)
            .then(data => {
                if (data === true) {
                    window.location.href = "/index.html";
            }
    })

    async function newStaff(email, password) {
            const newUser = {
                firstName: firstNameValue,
                lastName: lastNameValue,
                email: emailValue,
                password: newpassValue
            }

            const signUser = await fetch(`https://tkuelmfwvgrzbvyncons.supabase.co/auth/v1/signup?apikey=${API_KEY}`,{
                method:"POST",
                headers: {
                    'Content-Type': 'application/json',
                    'apikey': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRrdWVsbWZ3dmdyemJ2eW5jb25zIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY0NTEzMDM5MCwiZXhwIjoxOTYwNzA2MzkwfQ.xO6WIhxzv4ngdiIVpz9DC9Wa0wOBrurvANuFsRjCfEw"
                },
                body: JSON.stringify(newUser)
                })
            return signUser.json()
        }
    })

