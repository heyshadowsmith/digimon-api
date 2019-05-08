const request = new XMLHttpRequest();

request.open("GET", "https://digimon-api.herokuapp.com", true);

request.onload = function() {
    
    const data = JSON.parse(this.response);
    
    if (request.status >= 200 && request.status < 400) {
        console.log(data);
    } else {
        console.log('error');
    }
    
};

request.send();

let vm = new Vue({
    el: "#app",
    data: {
        name: "Shadow"
    }
});