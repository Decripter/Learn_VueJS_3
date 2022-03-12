<template>
  <MenuBar text="this text is pass by props" play="another prop " />
</template>

<script>
import MenuBar from "./components/MenuBar.vue";
export default {
  name: "App",
  components: {
    MenuBar,
  },
};
</script>

<style>
</style>
