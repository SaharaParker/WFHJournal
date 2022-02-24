
// MAY NEED AN IF/THEN STATEMENT???
const entryShow = document.getElementById('entrycontain');

let staff = [
    {
        "id": 1,
        "created_at": "2022-02-23T00:10:14+00:00",
        "firstName": "Sahara",
        "lastName": "Parker",
        "email": "THsahara@WFH.com",
        "password": "Password1"
    },
    {
        "id": 2,
        "created_at": "2022-02-23T00:16:04+00:00",
        "firstName": "Naya",
        "lastName": "Nelson",
        "email": "nnelson@WFH.com",
        "password": "Password2"
    },
    {
        "id": 3,
        "created_at": "2022-02-23T00:16:53+00:00",
        "firstName": "Pete",
        "lastName": "Grey",
        "email": "peteg1@WFH.com",
        "password": "Password3"
    },
    {
        "id": 4,
        "created_at": "2022-02-23T00:17:47+00:00",
        "firstName": "Greg",
        "lastName": "Lambert",
        "email": "journalgl@WFH.com",
        "password": "Password4"
    }
]

let entries = [
    {
        "id": 1,
        "created_at": "2022-02-23T00:41:22+00:00",
        "content": "Maecenas sit amet sodales diam, vitae viverra mi. Aenean consequat elit metus, posuere lacinia ipsum volutpat non. Duis aliquet varius neque et aliquet. ",
        "isPublic": false,
        "staff_id": 1
    },
    {
        "id": 2,
        "created_at": "2022-02-23T00:44:47+00:00",
        "content": "Fusce at ullamcorper magna. Etiam ullamcorper non nulla eget iaculis. Donec euismod dui aliquet augue porta porta. Curabitur gravida ac lacus vitae pretium. Duis aliquam eleifend magna, ac egestas diam porta vel. Cras ac egestas dolor, id convallis turpis. Sed mattis, nisi a rhoncus auctor, purus metus tempor augue, ac ultrices dolor urna facilisis elit. ",
        "isPublic": true,
        "staff_id": 2
    },
    {
        "id": 3,
        "created_at": "2022-02-23T00:47:21+00:00",
        "content": "Duis lacus massa, ultricies nec lobortis eget, aliquet quis purus. Etiam ac elit eu ante tincidunt rhoncus id et turpis. Maecenas et convallis neque. Nam eget mauris sit amet mi porttitor scelerisque ut ut urna. Donec venenatis suscipit nibh, a malesuada dolor pharetra non.",
        "isPublic": true,
        "staff_id": 3
    },
    {
        "id": 4,
        "created_at": "2022-02-23T00:47:48+00:00",
        "content": "Morbi molestie hendrerit erat, ac gravida leo finibus eget. In nec faucibus turpis, in facilisis velit. Praesent eu eros id nulla scelerisque vestibulum.",
        "isPublic": false,
        "staff_id": 4
    }
]

function displayAllEntries(items) {
    entryShow.innerHTML = ""

    for(const key in items){
        const entryDiv = document.createElement('div');
        entryDiv.innerHTML=` 
        <div>
            <div class="flex space-x-1 underline">
                <h3 class="font-semibold text-lg">${staff[key].firstName}</h3>
                <h3 class="font-semibold text-lg">${staff[key].lastName}</h3>
            </div>
            <h5 class="mb-2">${entries[key].created_at}</h5>
            <p class="mb-2">${entries[key].content}</p>
        </div>
    `;

        entryShow.appendChild(entryDiv); //adds new div to existing div
    }
}

const API_URL = 'https://tkuelmfwvgrzbvyncons.supabase.co'
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRrdWVsbWZ3dmdyemJ2eW5jb25zIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY0NTEzMDM5MCwiZXhwIjoxOTYwNzA2MzkwfQ.xO6WIhxzv4ngdiIVpz9DC9Wa0wOBrurvANuFsRjCfEw'
fetch(`${API_URL}/rest/v1/entries?apikey=${API_KEY}`)
    .then(response => response.json())
    .then(data => {
        const publicNews = data.filter(entries => entries.isPublic === true)
            console.log("Public News Only")
            publicNews.map(entries => console.log(entries.content))
            console.log(publicNews)
            displayAllEntries(publicNews)

    });




// const allEntries =
//     data.map(item => console.log(item.content))
// displayAllEntries(allEntries)