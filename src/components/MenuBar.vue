<template>
  <nav
    class="navbar has-background-info-dark"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="navbar-brand">
      <a
        role="button"
        class="navbar-burger has-text-white"
        aria-label="menu"
        aria-expanded="false"
        @click="isOpen = !isOpen"
        v-bind:class="{ 'is-active': isOpen }"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div class="navbar-menu" v-bind:class="{ 'is-active': isOpen }">
      <div class="navbar-end">
        <router-link to="/" class="navbar-item is-tab">Home</router-link>
        <router-link to="/about" class="navbar-item is-tab">About</router-link>
        <router-link to="/else" class="navbar-item is-tab"
          >Something Else</router-link
        >
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  data: function () {
    return {
      isOpen: false,
    };
  },
};
</script>
<style>
</style>