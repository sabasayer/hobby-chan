<script setup lang="ts">
import type { Hobby } from "@/types";
import Dialog from "primevue/dialog";
import { ref } from "vue";
import HobbyList from "../components/hobby/HobbyList.vue";
import NewHobbyForm from "../components/hobby/NewHobbyForm.vue";

const isModalVisible = ref(false);
const editingHobby = ref<Hobby | undefined>();

const open = () => (isModalVisible.value = true);
const close = () => (isModalVisible.value = false);

const edit = (data: Hobby) => {
  editingHobby.value = data;
  open();
};
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

    <HobbyList @edit="edit" />

    <Dialog
      v-model:visible="isModalVisible"
      modal
      maximizable
      :header="$t('NewHobby')"
    >
      <NewHobbyForm @submitted="close" :editing-hobby="editingHobby" />
    </Dialog>
  </main>
</template>
