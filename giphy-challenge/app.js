const app = new Vue({
    el: "#gifs",
    data: {
        baseURL: "http://api.giphy.com/v1/gifs/search?q=",
        search: "dogs",
        api_key: "&api_key=dc6zaTOxFJmzC&limit=10",
        gifUrl: "",
        gifArray : [],
        vmHtml: ""
    },
    methods: {
        getURL: function () {
            return `${this.baseURL}${this.search}${this.api_key}`;
        },
        fetchGif:  function () {
             fetch(this.getURL(), {
                method: "GET"
            }).then(res =>  res.json())
                .then(response => {
                    this.gifArray = response.data;
                    this.gifUrl = this.gifArray[0].images.fixed_height.url;
                }).catch(error => console.error('Error: ', error));
        }
    }
});


// queryURL = "http://api.giphy.com/v1/gifs/search?q=" + type + "&api_key=dc6zaTOxFJmzC&limit=10";