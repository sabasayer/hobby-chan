<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<template lang="pug">
header
Suspense
  RouterView
  template(#fallback) Loading...
</template>
