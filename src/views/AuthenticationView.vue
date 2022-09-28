<script setup lang="ts">
import { useAuth } from "@/stores/auth";

const { signIn, user } = useAuth();
</script>

<template>
  <main>Authentication</main>
  <div>{{ user }}</div>
</template>
