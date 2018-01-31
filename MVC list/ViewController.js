var personModel = new PersonModel();

var Index = 0;

(function init() {
    checkStorage();
})();

function checkStorage() {

    while (localStorage.getItem('name' + Index) != null) {
        console.log(Index);
        this.addItem(localStorage.getItem('name' + Index));
        Index++;
    }

}

registerListeners();

function addItem(storedName) {
    var input = storedName || document.getElementById('name');

    var name = storedName ||  input.value.trim();
    if(storedName === undefined){
        console.log("wasn't storade" );
        localStorage.setItem('name'+Index, name)
        Index++;
    }
    else {
        this.registerListeners();
    }

    if (name !== '') {
        console.log('add new item pice!');
        var person = new PersonComponent(name);

        personModel.addNewItem(person);

        input.value = '';

    }
}

function registerListeners() {
    personModel.addNewListener(updateList);
}

function updateList() {

    var list = document.querySelector('.list');

    while (list.hasChildNodes()) {
        list.removeChild(list.firstChild);
    }

    personModel.allItems.forEach(function (element) {

        var newLI = document.createElement('li');

        newLI.appendChild(document.createTextNode(element.name));

        list.insertBefore(newLI, list.firstChild);
    });


}
