<template>
  <a class="header-link" href="#"><slot /></a>
</template>

<script setup>
// No script logic needed for a simple link
</script>

<style scoped>
.header-link {
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 22px;
  line-height: 22px;
  letter-spacing: 2%;
  color: #FFFFFF;
  text-decoration: none;
  transition: color 0.2s;
  /* padding: 10px 20px; */
  display: inline-block;
}
.header-link:hover {
  color: #d1d1d1;
}
</style>
