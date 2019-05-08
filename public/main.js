let vm = new Vue({
    el: "#app",
    data: {
        id: "",
        name: "",
        level: "",
        url: "",
        response: "",
        endpoint: "https://digimon-api.herokuapp.com/api/digimon/"
    },
    methods: {
        searchName: function() {
            let name = "name/" + this.name;
            this.getDigimon(name);  
            this.name = "";
        },
        searchLevel: function() {
            let level = "level/" + this.level;
            this.getDigimon(level);
            this.level = "";
        },
        searchId: function() {
            let id = "id/" + this.id;
            this.getDigimon(id);
            this.id = "";
        },
        getDigimon: function(parameters) {
            axios({
                method: "GET",
                "url": this.endpoint + parameters
            }).then(result => {
                this.response = result.data;
            }, error => {
                console.error(error);
            });
        }
    }
});
