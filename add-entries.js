
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

});
