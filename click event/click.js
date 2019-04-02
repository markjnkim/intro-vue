const app = new Vue({
    el: "#click",
    data: {
        age: 0
    },
    methods: {
        add: function (num) {
            this.age += num;
        },
        sub: function (num) {
            this.age -= num;
        }
    }
})