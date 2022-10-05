<script setup lang="ts">
import TheNavigation from "@/components/TheNavigation.vue";
</script>

<template lang="pug">
div( class="flex h-screen overflow-hidden" )
  TheNavigation
  div( class="flex-1 px-3 overflow-auto" )
    RouterView
</template>
