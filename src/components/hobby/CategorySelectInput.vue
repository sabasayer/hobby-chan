<script setup lang="ts">
import { getHobbyCategories } from "@/api";
import type { HobbyCategory } from "@/types";
import { reactive } from "vue";
import Chip from "primevue/chip";
import Divider from "primevue/divider";

const props = defineProps<{ modelValue: string }>();
const emit = defineEmits<{ (e: "update:modelValue", value: string): void }>();

const groups = reactive<Record<string, HobbyCategory[]>>({});

const categories = await getHobbyCategories();
categories.forEach((category) => {
  const group = groups[category.hobbyType];
  if (!group) groups[category.hobbyType] = [category];
  else group.push(category);
});

const isSelected = (category: string) => props.modelValue === category;
const select = (category: string) => emit("update:modelValue", category);
</script>

<template lang="pug">
div(class="flex")
  template(v-for="(categories, type, i) in groups" :key="type")
    Divider(v-if="i" layout="vertical")
    div
      label {{ type }}
      div(class="mt-4 flex flex-wrap gap-3")
        Chip(
          v-for="category in categories"
          :key="category.name"
          :label="category.name"
          :class="{'bg-gray': isSelected(category.name), 'bg-white': !isSelected(category.name)}"
          class="cursor-pointer border-1 border-300"
          @click="select(category.name)")
</template>
