<script lang="ts" setup>
import type { Hobby, StatusType } from "@/types";
import { defineProps, ref, unref } from "vue";
import Card from "primevue/card";
import Menu from "primevue/menu";
import { useHobby } from "@/stores/hobby";
import { computed } from "vue";
import { statusIconMap, StatusList } from "@/utils/consts";
import type { MenuItem } from "primevue/menuitem";
import { useI18n } from "vue-i18n";

const props = defineProps<{ data: Hobby; horizontal?: boolean }>();
const emit = defineEmits<{ (e: "edit", value: Hobby): void }>();

const { remove, save, loadings } = useHobby();
const { t } = useI18n({ inheritLocale: true });

const menu = ref();

const removeHobby = async () => {
  await remove(unref(props.data));
};

const edit = () => emit("edit", props.data);
const changeStatus = async (status: StatusType) => {
  menu.value.toggle();
  await save({ ...props.data, status });
};
const toggleMenu = (event: MouseEvent) => menu.value.toggle(event);

const statusIcon = computed(() => statusIconMap[props.data.status]);

const statusList = computed<MenuItem[]>(() =>
  StatusList.filter((e) => e !== props.data.status).map((e) => ({
    label: t(`status.${e}`),
    icon: `pi ${statusIconMap[e]}`,
    command: () => changeStatus(e),
  }))
);
</script>

<template lang="pug">
Card
  template( #header )
    h2( class="px-3 pt-3 text-gray-600")  {{ data.name }}
  template( #content )
    div( :class="{ 'flex gap-3': horizontal }" )
      div
        i( class="pi mr-2" :class="statusIcon" )
        span {{ data.status }}
      div {{ data.category }}
      div {{ data.startDate.toDateString() }}
  template( #footer )
    div( class="flex justify-content-end gap-3" )
      PButton(
        class="p-button-raised p-button-text p-button-sm"
        :label="$t('ChangeStatus')"
        :loading="loadings.save"
        @click="toggleMenu" )
      Menu( ref="menu" id="status_menu" popup :model="statusList" )
      PButton(
        icon="pi pi-file-edit"
        :label="$t('Edit')"
        class="p-button-raised p-button-text p-button-sm"
        @click="edit" )
      PButton(
        icon="pi pi-trash"
        :label="$t('Remove')"
        class="p-button-raised p-button-text p-button-sm"
        :loading="loadings.remove"
        @click="removeHobby" )
</template>
