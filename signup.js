const firstNameValue = "Sahara"
const lastNameValue = "Parker"
const newpassValue = "Password1"
const emailValue = "THsahara@WFH.com"
const API_URL = `https://tkuelmfwvgrzbvyncons.supabase.co/auth/v1/signup`;
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRrdWVsbWZ3dmdyemJ2eW5jb25zIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY0NTEzMDM5MCwiZXhwIjoxOTYwNzA2MzkwfQ.xO6WIhxzv4ngdiIVpz9DC9Wa0wOBrurvANuFsRjCfEw";
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
            const newUser = {
                firstName: firstNameValue,
                lastName: lastNameValue,
                email: emailValue,
                password: newpassValue
            }

            const signUser = await fetch(`${API_URL}?apikey=${API_KEY}`,{
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

