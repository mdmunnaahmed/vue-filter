<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<style scoped>
.card {
  border-radius: 13px;
  box-shadow: 0 2px 12px #00000012;
  padding: 1.5rem;
  margin: 2rem auto;
  max-width: 40rem;
}
</style>