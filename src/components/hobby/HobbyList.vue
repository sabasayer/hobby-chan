<script lang="ts" setup>
import ProgressBar from "primevue/progressbar";
import DataView from "primevue/dataview";
import Card from "primevue/card";

import { useHobby } from "@/composables/useHobby";
import { ref } from "vue";

const { error, get, hobbies, loading } = useHobby();
const layout = ref("grid");

await get();
</script>

<template>
  <div class="py-3">
    <ProgressBar v-if="loading" mode="indeterminate" />
    <h1 v-if="error" class="p-error">{{ error }}</h1>
    <DataView
      :value="hobbies"
      :layout="layout"
      data-key="id"
      paginator
      :rows="12"
    >
      <template #grid="{ data }">
        <div>
          <Card>
            <template #header>
              <h2 class="px-3 pt-3 text-gray-600">
                {{ data.name }}
              </h2>
            </template>
            <template #content>
              <div>{{ data.status }}</div>
              <div>{{ data.category }}</div>
              <div>{{ new Date(data.startDate.seconds) }}</div>
            </template>
            <template #footer>
              <div class="flex justify-content-end gap-3">
                <PButton
                  icon="pi pi-file-edit"
                  label="Edit"
                  class="p-button-secondary p-button-sm"
                />
                <PButton
                  icon="pi pi-trash"
                  label="Remove"
                  class="p-button-secondary p-button-sm"
                />
              </div>
            </template>
          </Card>
        </div>
      </template>
    </DataView>
  </div>
</template>
<style scoped lang="scss">
@import "primeflex/primeflex.scss";

::v-deep(.p-dataview-grid .p-grid) {
  @include styleclass("gap-3");
}
</style>
