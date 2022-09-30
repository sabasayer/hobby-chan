<script setup lang="ts">
import Dialog from "primevue/dialog";
import { ref } from "vue";
import NewHobbyForm from "../components/hobby/NewHobbyForm.vue";
import HobbyList from "../components/hobby/HobbyList.vue";

const isModalVisible = ref(false);

const open = () => (isModalVisible.value = true);
</script>

<template>
  <main class="p-3">
    <h1>{{ $t("Hobbies") }}</h1>
    <PButton
      @click="open"
      :label="$t('AddNewHobby')"
      icon="pi pi-plus"
      class="p-button-large"
    />

    <HobbyList />

    <Dialog
      v-model:visible="isModalVisible"
      modal
      maximizable
      :header="$t('NewHobby')"
    >
      <NewHobbyForm />
    </Dialog>
  </main>
</template>
