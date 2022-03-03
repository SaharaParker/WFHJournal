
// MAY NEED AN IF/THEN STATEMENT???
const entryShow = document.getElementById('entrycontain');


const API_URL = 'https://tkuelmfwvgrzbvyncons.supabase.co'
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRrdWVsbWZ3dmdyemJ2eW5jb25zIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY0NTEzMDM5MCwiZXhwIjoxOTYwNzA2MzkwfQ.xO6WIhxzv4ngdiIVpz9DC9Wa0wOBrurvANuFsRjCfEw'

fetch (`${API_URL}/rest/v1/entries?apikey=${API_KEY}`)
    .then(response => response.json())
    .then(data => {
        const publicNews = data.filter(entries => entries.isPublic === true)
        console.log("Public News Only")
        const entryContent = publicNews.map(entries => {
            return entries.content
            console.log(entryContent)
        })
        console.log(publicNews)
        for (const key in entryContent) {
            const div = document.createElement('div')
            //Need to make seperate divs!!
            div.innerHTML = `<div class="mb-4"><p>${entryContent}</p></div><hr>`;
            entryShow.appendChild(div)
            return publicNews;
        }
    });



// const allEntries =
//     data.map(item => console.log(item.content))
// displayAllEntries(allEntries)