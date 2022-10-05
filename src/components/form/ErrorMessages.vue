<script lang="ts" setup>
import type { ErrorObject } from "@vuelidate/core";
defineProps<{ errors: ErrorObject[] }>();
</script>

<template lang="pug">
small(v-for="error in errors" :key="error.$uid" class="p-error") {{ error.$message }}
</template>
