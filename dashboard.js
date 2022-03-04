const entryShow = document.getElementById('entrycontain');


const API_URL = 'https://tkuelmfwvgrzbvyncons.supabase.co'
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRrdWVsbWZ3dmdyemJ2eW5jb25zIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY0NTEzMDM5MCwiZXhwIjoxOTYwNzA2MzkwfQ.xO6WIhxzv4ngdiIVpz9DC9Wa0wOBrurvANuFsRjCfEw'

fetch (`${API_URL}/rest/v1/entries?apikey=${API_KEY}`)
    .then(response => response.json())
    .then(data => {
        const publicNews = data.filter(entries => entries.isPublic === true)
        console.log("Public News Only")

        console.log(publicNews)

        publicNews.map( entries => {
            const div = document.createElement('div')

                div.innerHTML = `
                                <div class="mb-4">
                                    <h4>${entries.created_at}</h4>
                                    <p>${entries.content}</p>
                                </div><hr>
                                `;
                entryShow.appendChild(div)
        })

    });

