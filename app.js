const app = Vue.createApp({
    // template: "<h1>This is my first template</h1>"
    data() {
        return {
            hideBooks: true,
            title: "The final empire",
            author: "Jhon Smell",
            age: 43
        }
    },
    methods: {
        changeTitle(titleArg) {
            this.title = titleArg
        },
        toogleHideBooks() {
            this.hideBooks = !this.hideBooks
        }
    }

})

app.mount('#app')