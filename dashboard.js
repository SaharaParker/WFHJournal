let allEntries = [
    {
        staffId : 1,
        firstName :"Sahara",
        lastName: "Parker",
        date: "2022-02-02",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, cumque, omnis.",
        isPublic: false
    },
    {
        staffId: 2,
        firstName: "Naya",
        lastName: "Nelson",
        date: "2022-02-02",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
        isPublic: true
    },
    {
        staffId: 3,
        firstName: "Pete",
        lastName: "Grey",
        date: "2022-02-04",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur dignissimos dolorem eaque, expedita itaque libero magni modi qui sequi sint tenetur vitae voluptas.",
        isPublic: true
    },
    {
        staffId: 4,
        firstName: "Greg",
        lastName: "Lambert",
        date: "2022-02-05",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores doloribus eos modi necessitatibus omnis quidem, tempore ut!",
        isPublic: false
    },
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
                <h3 class="font-semibold text-lg">${items[key].firstName}</h3>
                <h3 class="font-semibold text-lg">${items[key].lastName}</h3>
            </div>
            <h5 class="mb-2">${items[key].date}</h5>
            <p class="mb-2">${items[key].content}</p>
        </div>
    `;

        entryShow.appendChild(entryDiv); //adds new div to existing div
    }
}
