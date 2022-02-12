let allEntries = [
    {
        "id": 1,
        "created_at": 1644606113560,
        "name": "Sahara Parker",
        "date": "2022-02-02",
        "content": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, cumque, omnis",
        "isPublic": false,
        "user_id": 1
    },
    {
        "id": 2,
        "created_at": 1644606144699,
        "name": "Naya Nelson",
        "date": "2022-02-04",
        "content": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, cumque, omnis",
        "isPublic": true,
        "user_id": 2
    },
    {
        "id": 3,
        "created_at": 1644606214326,
        "name": "Pete Gray",
        "date": "2022-02-05",
        "content": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, cumque, omnis",
        "isPublic": true,
        "user_id": 3
    },
    {
        "id": 4,
        "created_at": 1644606239076,
        "name": "Greg Lambert",
        "date": "2022-02-08",
        "content": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, cumque, omnis",
        "isPublic": false,
        "user_id": 4
    }
];

const entryShow = document.getElementById('entrycontain');

displayAllEntries(allEntries)

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
