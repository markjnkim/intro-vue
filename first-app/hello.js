const helloWorld = new Vue({
  el: "#first-app",
  data: {
    first_name: "Matt",
    last_name: "Damon",
    url: "https://media.giphy.com/media/ZLxRWG0vhzpiE/giphy-downsized.gif",
    vmHtml: "<span style='color:red; border: solid 2px purple;'>Pretty aren't I?</span>"
  },
  methods: {
    full_name: function () {
      return `Fullname: ${this.first_name} ${this.last_name}`;
    },
    greet: function (time) {
      return `Good ${time} ${this.first_name} `;
    },
    alert: function () {
      alert(`Hey ${this.first_name}, somebody's tired!`)
    }
  }
})