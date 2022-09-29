<script setup lang="ts">
import { ref } from "vue";
import CategorySelectInput from "./CategorySelectInput.vue";

const category = ref("");
</script>

<template>
  <form>
    <section>
      <h3>Categories</h3>
      <CategorySelectInput v-model="category" />
    </section>
  </form>
</template>
