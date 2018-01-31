var chatBox = document.querySelector('.chatBox');
        
var connection = new WebSocket("wss://obscure-waters-98157.herokuapp.com");

var connectionStatus = document.querySelector('.connectionStatus');

var message = document.querySelector('.message');

var send = document.querySelector('.send');

connection.onmessage = function (message) {

    var newLI = document.createElement('li');

    var newPara = document.createElement('p');

    var timeSpan = document.createElement('span');

    var trimMesssage = (message.data.replace(/GMT\+\d+\s\(UTC\).{3}/g, '| '));

    var split = trimMesssage.split('==>');

    timeSpan.appendChild(document.createTextNode(split[0]));

    newPara.appendChild(document.createTextNode(split[1]));

    newLI.appendChild(timeSpan);
    newLI.appendChild(newPara);

    //chatBox.insertBefore(newLI, chatBox.firstChild); flex column-revers
    chatBox.appendChild(newLI);

    chatBox.scrollTop = chatBox.scrollHeight;
}
connection.onclose = function () {
    connectionStatus.innerHTML = 'Offline';
};

connection.onopen = function(){
    connectionStatus.innerHTML = 'Online';
}

send.addEventListener('click',function(){
    if(message.value !== ''){
        console.log('message message');
        connection.send(message.value);
    } else {
        console.log('Do nothing');
    }
    console.log('value: '+ message.value);
    message.value ='';
})