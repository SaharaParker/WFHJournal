

// const entryShow = document.getElementById('entrycontain');
//
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