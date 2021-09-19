<template>
  <!-- html -->
  <footer class="clearAllContainer">
    <span class="clearAllBtn shadow"
    v-on:click="clearTodo">
      Clear All
    </span>
  </footer>
</template>

<script>
export default {
  // js
  methods: {
    clearAll: function() {
      localStorage.clear();
    }
  }
}
</script>

<style scoped>
  /* css */
  .clearAllContainer {
    width: 8.5rem;
    height: 50px;
    line-height: 50px;
    background-color: white;
    border-radius: 5px;
    margin: 0 auto;
  }

  .clearAllBtn {
    color: #e20303;
    display: block;
  }
</style>