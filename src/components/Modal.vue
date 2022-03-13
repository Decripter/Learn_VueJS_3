<template>
  <div class="backdrop" @click.self="closeModal">
    <div class="modals" :class="{ sale: theme === 'sale' }">
      <slot> Default Content</slot>
      <slot name="links"> </slot>
      <slot name="about"></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: ["header", "text", "theme"],
  methods: {
    closeModal() {
      this.$emit("close");
    },
    closeModalTwo() {
      this.$emit("close");
    },
  },
};
</script>
<style>
.modals {
  width: 400px;

  padding: 20px;
  margin: 150px auto;
  background: white;
  border-radius: 10px;
}
.backdrop {
  top: 0;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
}
.modals h1 {
  color: #03cdb4;
  border: none;
  padding: 0%;
}
.modals p {
  font-style: normal;
}
.modals.sale {
  background: crimson;
  color: white;
}
.modals.modals.sale h1 {
  color: white;
}
</style>