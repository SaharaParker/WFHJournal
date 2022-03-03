
// MAY NEED AN IF/THEN STATEMENT???
const entryShow = document.getElementById('entrycontain');

//
// function displayAllEntries(items) {
//     entryShow.innerHTML = ""
//
//     for (const key in items) {
//         const entryDiv = document.createElement('div');
//         entryDiv.innerHTML = `
//         <div>
//             <div class="flex space-x-1 underline">
//                 <h3 class="font-semibold text-lg">${staff[key].firstName}</h3>
//                 <h3 class="font-semibold text-lg">${staff[key].lastName}</h3>
//             </div>
//             <h5 class="mb-2">${entries[key].created_at}</h5>
//             <p class="mb-2">${entries[key].content}</p>
//         </div>
//     `;
//
//         entryShow.appendChild(entryDiv); //adds new div to existing div
//     }
// }

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
        const div = document.createElement('div')
        div.innerHTML = `<p class="underline">${entryContent}</p>`;
        entryShow.appendChild(div)
        return publicNews;
    });



// const allEntries =
//     data.map(item => console.log(item.content))
// displayAllEntries(allEntries)