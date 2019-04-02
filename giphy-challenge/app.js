const app = new Vue({
    el: "#gifs",
    data: {
        baseURL: "http://api.giphy.com/v1/gifs/search?q=",
        search: "dogs",
        api_key: "&api_key=dc6zaTOxFJmzC&limit=10",
        gifUrl: "",
        gifArray : []
    },
    methods: {
        getURL: function () {
            return `${this.baseURL}${this.search}${this.api_key}`;
        },
        fetchGif: function () {
            fetch(this.getURL(), {
                method: "GET"
            }).then(res => res.json())
                .then(response => {
                    this.gifArray = response.data;
                    this.gifUrl = this.gifArray[0].url;
                    console.log("gifArray:", this.gifArray, this.gifUrl);

                })
            // .then(response => console.log('Success:', JSON.stringify(response)))
            // .catch(error => console.error('Error:', error));
            // alert("you've been clicked")
        }
    }
});


// queryURL = "http://api.giphy.com/v1/gifs/search?q=" + type + "&api_key=dc6zaTOxFJmzC&limit=10";