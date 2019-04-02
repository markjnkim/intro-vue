const todoApp = new Vue({
    el: "#todo",
    data: {
        name: " ",
        todo: " "
    },
    methods: {
        add () {
            todo
        }
    }
})


const helloWorld = new Vue({
    el: "#vue-app",
    data: {
        x: 0,
        y: 0,
        age: 25,
        name: [
            {
                first: "Marcus",
                last: "Jerbear"
            },
            {
                first: "Dorimus",
                last: "Mericus"
            }],
        job: "Ninja",
        website: ["https://stackoverflow.com/", "https://www.google.com/"],
        websiteTag: '<a href="https://stackoverflow.com">The stack</a>'
    },
    methods: {
        greet (time) {
            return `Hello ${this.name.map(el => {
                return ` ${el.first}  ${el.last}`;
            })}  Good ${time}`;
        },
        ping () {
            `${this.website.map(link => {
                return `${link}`
            })}`
        },
        add (num) {
            this.age += num;
        },
        subtract (num) {
            this.age -= num;
        },
        updateXY (event) {
            this.x = event.offsetX;
            this.y = event.offsetY;
        },
        click () {
            alert("you clicked this");
        }

    }
});

new Vue({
    el: "#vue-keyevent",
    data: {
        name: "",
        age: ""
    },
    methods: {
        logName () {
            
        },
        logAge () {

        }
    }
})