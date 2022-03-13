<template>
  <h1>{{ title }}</h1>
  <br />
  <button @click="toggleModal">Show Modal</button>
  <div v-if="showModal">
    <Modal theme="sales" @close="toggleModal">
      <div>
        <h1>This is my title using slots</h1>
      </div>
      <template v-slot:links>
        <div>
          <a href="#">Create Account</a>
          <a href="#">Login</a>
        </div>
      </template>
    </Modal>
  </div>
</template>

<script>
import Modal from "./components/Modal";

export default {
  name: "App",
  components: { Modal },
  data() {
    return {
      title: "My First Vue App!",

      showModal: false,
    };
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
}
.modals a {
  color: #333;
  padding: 8px;
  border: 1px solid #eee;
  border-radius: 4px;
  text-decoration: none;
  margin: 10px;
}
</style>