let vm = new Vue({
    el: "#app",
    data: {
        id: "",
        name: "",
        level: "",
        url: "",
        response: "",
        endpoint: "https://digimon-api.herokuapp.com/api/digimon/",
        error: {
            isVisible: false,
            message: "Nothing matches your input in our database."
        }
    },
    methods: {
        searchName: function() {
            let path = "name/";
            let name = this.name;
            this.getDigimon(path, name);  
            
            this.name = "";
            this.error.isVisible = false;
        },
        searchLevel: function() {
            let path = "level/";
            let level = this.level;
            this.getDigimon(path, level);
            
            this.level = "";
            this.error.isVisible = false;
        },
        searchId: function() {
            let path = "id/";
            let id = this.id;
            this.getDigimon(path, id);
            
            this.id = "";
            this.error.isVisible = false;
        },
        getDigimon: function(path, parameter) {
            axios({
                method: "GET",
                "url": this.endpoint + path + parameter
            }).then(result => {
                this.response = result.data;
            }, error => {
                this.error.message = `${parameter} isn\'t in our database.`;
                this.error.isVisible = true;
            });
        }
    }
});
