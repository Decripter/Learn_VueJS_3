const app = Vue.createApp({
    // template: "<h1>This is my first template</h1>"
    data() {
        return {
            hideBooks: true,

            books:
                [
                    {
                        title: "The final empire",
                        author: "Jhon Sword",
                    },
                    {
                        title: "The middle age of empire",
                        author: "Jhon Smell",
                    },
                    {
                        title: "The start of empire",
                        author: "Elton Smell",
                    },
                ],
        }
    },
    methods: {
        changeTitle(titleArg) {
            this.title = titleArg
        },
        toogleHideBooks(e) {
            console.log(e)
            this.hideBooks = !this.hideBooks
        }
    }

})

app.mount('#app')