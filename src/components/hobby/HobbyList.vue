<script lang="ts" setup>
import ProgressBar from "primevue/progressbar";
import DataView from "primevue/dataview";
import DataViewLayoutOptions from "primevue/dataviewlayoutoptions";

import { useHobby } from "@/stores/hobby";
import { defineAsyncComponent, ref } from "vue";
import HobbyCard from "./HobbyCard.vue";
import { storeToRefs } from "pinia";
import type { Hobby } from "@/types";
const HobbyCalendar = defineAsyncComponent(() => import("./HobbyCalendar.vue"));
const HobbyTable = defineAsyncComponent(() => import("./HobbyTable.vue"));

const emit = defineEmits<{ (e: "edit", value: Hobby): void }>();

const store = useHobby();
const { loadings, errors, hobbies } = storeToRefs(store);
const { get } = store;
const layout = ref("grid");

await get();

const edit = (data: Hobby) => emit("edit", data);
</script>

<template lang="pug">
div(class="py-3")
  ProgressBar(v-if="loadings.get" mode="indeterminate")
  h1(v-if="errors.get" class="p-error") {{ errors.get }}
  DataView(
    :value="hobbies"
    :layout="layout"
    data-key="id"
    paginator
    :rows="12")
    template(#header)
      div(class="flex justify-content-end")
        DataViewLayoutOptions(v-model="layout")
    template(#grid="{ data }")
      div(class="col-4 p-1")
        HobbyCard(:data="data" @edit="edit")
    template(#list="{ data }")
      div(class="w-full")
        HobbyCard(:data="data" horizontal @edit="edit")
  HobbyCalendar(v-if="hobbies.length" :hobbies="hobbies" class="mt-3")
  HobbyTable(v-if="hobbies.length" :hobbies="hobbies" class="mt-3")
</template>
