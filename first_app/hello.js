const helloWorld = new Vue({
    el: "#first-app",
    data: {
        first_name: "Matt",
        last_name: "Damon",
        url: "https://media.giphy.com/media/ZLxRWG0vhzpiE/giphy-downsized.gif"
    },
    methods: {
        full_name: function() {
            return `Hello ${this.first_name} ${this.last_name}`;
        },
        greet: function(time) {
            return `Hello ${this.first_name}. Good ${time}`;
        },
        alert: function () {
            alert(`Hi ${this.first_name}, cute baby`)
        }
    }
})