<script lang="ts" setup>
import type { ErrorObject } from "@vuelidate/core";
defineProps<{ errors: ErrorObject[] }>();
</script>

<template>
  <small v-for="error in errors" :key="error.$uid" class="p-error">
    {{ error.$message }}</small
  >
</template>
