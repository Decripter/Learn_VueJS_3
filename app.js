const app = Vue.createApp({
    // template: "<h1>This is my first template</h1>"
    data() {
        return {
            title: "The final empire",
            author: "Jhon Smell",
            age: 43
        }
    }
})

app.mount('#app')