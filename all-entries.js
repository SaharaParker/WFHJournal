const journalEntries = document.getElementById('jourentries');

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


    fetch(`${API_URL}/rest/va/entries?apikey=${API_KEY}`)
        .then(res => res.json())
        .then(data => {
            console.log("====All News====")
            data.map(entries => console.log(entries.content))
            displayAllEntries(journalEntries)
        })







const form = document.getElementById('addent');


form.addEventListener('submit',(evt)=>{
    evt.preventDefault();

    console.log(document.getElementById('first-new').value);
    console.log(document.getElementById('last-new').value);
    console.log(document.getElementById('date-new').value);
    console.log(document.getElementById('new-content').value);

    const addedEntries = {
        firstName:document.getElementById('first-new').value,
        lastName:document.getElementById('last-new').value,
        date:document.getElementById('date-new').value,
        content:document.getElementById('new-content').value,

    }
    // console.log(allNews);
    // console.log(addedNews)

    allEntries = [...allEntries, addedEntries];

    displayAllEntries(allEntries)
    console.log(allEntries);

})




