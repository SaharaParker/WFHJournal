
const API_URL = 'https://tkuelmfwvgrzbvyncons.supabase.co/auth/v1/signup'
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRrdWVsbWZ3dmdyemJ2eW5jb25zIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY0NTEzMDM5MCwiZXhwIjoxOTYwNzA2MzkwfQ.xO6WIhxzv4ngdiIVpz9DC9Wa0wOBrurvANuFsRjCfEw'
const signForm = document.getElementById('signup')

    signForm.addEventListener('submit',(event) => {

        event.preventDefault()

        const firstNameValue = event.target[0].value
        const lastNameValue =  event.target[1].value
        const emailValue = event.target[2].value
        const newpassValue = event.target[3].value

        console.log(emailValue)
        console.log(newpassValue)

        let responsePromise = fetch (`${API_URL},`; {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'apikey': `${API_KEY}`,
            },
            body: JSON.stringify({
                "email": emailValue,
                "password": newpassValue
            })
        })
    })

        // async function signUp(email,password){
        //
        //     const newStaff ={
        //         email: email,
        //         password: password
        //     }
        //
        //     const signupUser = await fetch(`https://xvhrhlkmoaprvzmyyurp.supabase.co/auth/v1/signup`, {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json',
        //             'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh2aHJobGttb2FwcnZ6bXl5dXJwIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY0NDUwMjg4MCwiZXhwIjoxOTYwMDc4ODgwfQ._Nn8340qosB8uceqOqeVF4x-yeJiUz3MtXY30pDPeyY'
        //         },
        //         body: JSON.stringify(newUser)
        //     })
        //
        //     return signUpUser.json()
        // }})

// signUp(email,password)
//     .then(data => {
//         if (data === true) {
//             window.location.href = "/index.html";
//         }
//     });

