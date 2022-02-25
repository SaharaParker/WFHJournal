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


fetch('https://tkuelmfwvgrzbvyncons.supabase.co/rest/v1/entries?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRrdWVsbWZ3dmdyemJ2eW5jb25zIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDUxMzAzOTAsImV4cCI6MTk2MDcwNjM5MH0.mzpR2uu1eH7weegTdq4lthnsVpcfLN6pJe3zNnWI8W4')
    .then(res => res.json())
    .then(data => {
        console.log("====All News====")
        data.map(entries => console.log(entries.content))
        displayAllEntries(entries.content)
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




