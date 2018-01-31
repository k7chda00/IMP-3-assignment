var list = document.querySelector('.list');

var input = document.getElementById('name');

function addPerson () {

    var name = input.value.trim();

    if( name !== '' ){

        var newLI = document.createElement('li');

        newLI.appendChild(document.createTextNode(name));

        list.insertBefore(newLI, list.firstChild);

        input.value = '';
    }
};