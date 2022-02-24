

const entryShow = document.getElementById('entrycontain');

let allEntries = [
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
// displayAllEntries(allEntries)

function displayAllEntries(items) {
    entryShow.innerHTML = ""

    for(const key in items){
        const entryDiv = document.createElement('div');
        entryDiv.innerHTML=` 
        <div>
            <div class="flex space-x-1 underline">
                <h3 class="font-semibold text-lg">${items[key].name}</h3>
            </div>
            <h5 class="mb-2">${items[key].date}</h5>
            <p class="mb-2">${items[key].content}</p>
        </div>
    `;

        entryShow.appendChild(entryDiv); //adds new div to existing div
    }
}

const API_URL = "https://tkuelmfwvgrzbvyncons.supabase.co"

fetch(API_URL)
    .then(response => response.json())
    .then(data => {
        const publicNews =
            data.filter(item => item.isPublic === true)

        console.log("Public News Only")
        publicNews.map(item => console.log(item.content))

        console.log("All News")
        data.map(item => console.log(item.content))
    });