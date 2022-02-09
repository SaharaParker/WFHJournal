let entriesFromBackendDataStore = [
    {
        id: 1,
        fullName: "Sahara Parker",
        date: "2022-02-01",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum fugit in laudantium molestias nihil nostrum odio rem? Aperiam dolorum et iure nihil nostrum!"
    }, {
        id: 2,
        fullName: "Olive Brown",
        date: "2022-02-02",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa delectus facilis numquam!"
    }, {
        id: 3,
        fullName: "Cat Rily",
        date: "2022-02-03",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum est exercitationem laboriosam nostrum obcaecati omnis quibusdam reprehenderit saepe?"
    }];

const entryShow = document.getElementById('jourentries');

entryShow(entriesFromBackendDataStore);