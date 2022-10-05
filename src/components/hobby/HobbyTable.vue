<script lang="ts" setup>
import type { Hobby } from "@/types";
import DataTable from "primevue/datatable";
import type { DataTableFilterMeta } from "primevue/datatable";
import Column from "primevue/column";
import InputText from "primevue/inputtext";
import Calendar from "primevue/calendar";
import { FilterMatchMode, FilterOperator } from "primevue/api";
import { ref } from "vue";

defineProps<{ hobbies: Hobby[] }>();

const filters = ref<DataTableFilterMeta>({
  global: { value: null, matchMode: FilterMatchMode.CONTAINS },
  name: {
    operator: FilterOperator.AND,
    constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }],
  },
  startDate: {
    operator: FilterOperator.AND,
    constraints: [{ value: null, matchMode: FilterMatchMode.DATE_IS }],
  },
});
</script>

<template lang="pug">
div
  DataTable(
    :value="hobbies"
    v-model:filters="filters"
    :global-filter-fields="['name', 'status', 'category']"
    filter-display="menu"
    resizable-columns
    column-resize-mode="fit"
    striped-rows
    show-gridlines
    data-key="id"
    class="p-datatable-sm")
    template(#header)
      div(class="flex justify-content-between align-items-center")
        h1 {{ $t("Hobbies") }}
        span( class="p-input-icon-left" )
          i( class="pi pi-search" )
          InputText(
            v-model="filters['global'].value"
            placeholder="Keyword Search")
    template( #empty ) {{ $t("TableEmpty") }}
    Column( field="name" sortable :header="$t('Name')")
      template( #filter="{ filterModel }" )
        InputText(
          type="text"
          v-model="filterModel.value"
          class="p-column-filter"
          placeholder="Search by name")
    Column( field="category" sortable :header="$t('Category')" )
    Column( field="status" sortable :header="$t('Status')" )
    Column( field="startDate" sortable :header="$t('StartDate')" )
      template( #filter="{ filterModel }" )
        Calendar(
          v-model="filterModel.value"
          dateFormat="mm/dd/yy"
          placeholder="mm/dd/yyyy" )
    Column(
      :header="$t('Actions')"
      body-class="text-center"
      header-class="text-center" )
      template( #body )
        PButton( icon="pi pi-cog" )
</template>
