const app = Vue.createApp({
    // template: "<h1>This is my first template</h1>"
    data() {
        return {
            hideBooks: true,
            url: "http://google.com",
            books:
                [
                    { title: 'name of the wind', author: 'patrick rothfuss', img: 'assets/1.jpg', url: "https://www.google.com/search?q=name+of+the+wind", isFav: true },
                    { title: 'the way of kings', author: 'brandon sanderson', img: 'assets/2.jpg', url: "https://www.google.com/search?q=the+way+of+kings", isFav: false },
                    { title: 'the final empire', author: 'brandon sanderson', img: 'assets/3.jpg', url: "https://www.google.com/search?q=the+final+empire", isFav: true },
                ],
        }
    },
    methods: {

        changeTitle(titleArg) {
            this.title = titleArg
        },

        toggleHideBooks(book) {
            this.hideBooks = !this.hideBooks
        },

        toggleFav(book) {
            book.isFav = !book.isFav
        }

    },
    computed: {
        filtredBooks() {
            return this.books.filter((book) => book.isFav)
        }
    }

})

app.mount('#app')