<script lang="ts" setup>
import type { Hobby } from "@/types";
import { defineProps, unref } from "vue";
import Card from "primevue/card";
import { useHobby } from "@/stores/hobby";
import { useToast } from "primevue/usetoast";

const props = defineProps<{ data: Hobby; horizontal?: boolean }>();
const emit = defineEmits<{ (e: "edit", value: Hobby): void }>();

const { remove, errors, loadings } = useHobby();
const { add } = useToast();

const removeHobby = async () => {
  await remove(unref(props.data));
  if (errors.remove)
    add({ severity: "error", summary: "Remove Error", detail: errors.remove });
};

const edit = () => emit("edit", props.data);
</script>

<template>
  <Card>
    <template #header>
      <h2 class="px-3 pt-3 text-gray-600">
        {{ data.name }}
      </h2>
    </template>
    <template #content>
      <div :class="{ 'flex gap-3': horizontal }">
        <div>{{ data.status }}</div>
        <div>{{ data.category }}</div>
        <div>{{ data.startDate.toDateString() }}</div>
      </div>
    </template>
    <template #footer>
      <div class="flex justify-content-end gap-3">
        <PButton
          icon="pi pi-file-edit"
          :label="$t('Edit')"
          class="p-button-raised p-button-text p-button-sm"
          @click="edit"
        />
        <PButton
          icon="pi pi-trash"
          :label="$t('Remove')"
          class="p-button-raised p-button-text p-button-sm"
          :loading="loadings.remove"
          @click="removeHobby"
        />
      </div>
    </template>
  </Card>
</template>
