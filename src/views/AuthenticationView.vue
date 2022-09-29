<script setup lang="ts">
import Divider from "primevue/divider";
import TheLogin from "../components/auth/TheLogin.vue";
import TheRegister from "../components/auth/TheRegister.vue";
</script>

<template>
  <div
    class="flex align-items-center justify-content-center h-screen bg-gray-100"
  >
    <div class="lg:w-6 w-full p-5 flex gap-3 bg-white shadow-2 border-round">
      <TheRegister class="flex-1" />
      <Divider layout="vertical">
        <span>Or</span>
      </Divider>
      <TheLogin class="flex-1" />
    </div>
  </div>
</template>
