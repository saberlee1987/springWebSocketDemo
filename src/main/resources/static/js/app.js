


// //////////////////////////////////////////////////////////////////////


function testWebSocket(){
    let webSocket = new WebSocket("ws://localhost:9700/hello");
    webSocket.onopen = function (event) {
        webSocket.send("hello I am saber Azizi");
    }

    webSocket.onmessage = function (event) {
        console.log("response message from server onmessage ===>  " + event.data)
    }
    webSocket.onclose = function (event) {
        console.log("on close method .....")
    };
}

const stompClient = new StompJs.Client({
    brokerURL: 'ws://localhost:9700/stompClient'
});

stompClient.onConnect = (frame) => {
    console.log("connected : " + frame)
    stompClient.subscribe("/topic/greetings", (greeting) => {
        console.log(greeting.body)
    })

};
function connect(){
    console.log("connect method is called .....")
    console.log("stompClient.active : "+stompClient.active)
    stompClient.activate()
    console.log("stompClient.active : "+stompClient.active)
}


function sendMessage(){
    stompClient.publish({
        destination: "/app/hello",
        body: JSON.stringify({
            'name': "saber66"
        })
    })
}

function disconnect() {
    stompClient.deactivate();
    console.log("Disconnected");
}
