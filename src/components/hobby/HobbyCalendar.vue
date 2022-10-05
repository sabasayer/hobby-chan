<script lang="ts" setup>
import type { Hobby } from "@/types";
import "@fullcalendar/core/vdom";
import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { ref, watch } from "vue";

const props = defineProps<{ hobbies: Hobby[] }>();
const options = ref({
  plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
  initialDate: new Date().toISOString(),
  headerToolbar: {
    left: "prev,next today",
    center: "title",
    right: "dayGridMonth,timeGridWeek,timeGridDay",
  },
  editable: true,
  selectable: true,
  selectMirror: true,
  dayMaxEvents: true,
  events: props.hobbies.map((e) => ({
    title: e.name,
    date: new Date(e.startDate).toISOString(),
  })),
});

const setEvents = () =>
  (options.value.events = props.hobbies.map((e) => ({
    title: e.name,
    date: new Date(e.startDate).toISOString(),
  })));

watch(props.hobbies, () => setEvents());
</script>

<template lang="pug">
div
  h2 {{ $t("Calendar") }}
  FullCalendar(:options="options")
</template>
