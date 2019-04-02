const helloWorld = new Vue({
    el: "#first-app",
    data: {
        first_name: "Matt",
        last_name: "Damon",
    },
    methods: {
        full_name: function() {
            return `Hello ${this.first_name} ${this.last_name}`;
        },
        greet: function(time) {
            return `Hello ${this.first_name}. Good ${time}`;
        }
    }
})