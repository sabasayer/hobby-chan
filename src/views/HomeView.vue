<script setup lang="ts">
import Dialog from "primevue/dialog";
import { ref } from "vue";
import NewHobbyForm from "../components/hobby/NewHobbyForm.vue";

const isModalVisible = ref(false);

const open = () => (isModalVisible.value = true);
</script>

<template>
  <main class="p-3">
    <h1>Hobbies</h1>
    <PButton
      @click="open"
      label="Add new hobby"
      icon="pi pi-plus"
      class="p-button-large"
    />
    <Dialog
      v-model:visible="isModalVisible"
      modal
      maximizable
      header="New Hobby"
    >
      <NewHobbyForm />
    </Dialog>
  </main>
</template>
