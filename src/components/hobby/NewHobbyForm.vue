<script setup lang="ts">
import type { Hobby } from "@/types";
import { reactive, ref } from "vue";
import CategorySelectInput from "./CategorySelectInput.vue";
import SelectButton from "primevue/selectbutton";
import InputText from "primevue/inputtext";
import Calendar from "primevue/calendar";
import { useHobby } from "@/composables/useHobby";
import { useVuelidate } from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import ErrorMessages from "../form/ErrorMessages.vue";
import { addHobby } from "@/api";

const { statusList } = useHobby();

const loading = ref(false);
const submitted = ref(false);
const hobby = reactive<Hobby>({
  name: "",
  category: "",
  startDate: new Date(),
  status: "",
});

const rules = {
  name: { required },
  category: { required },
  startDate: { required },
  status: { required },
};

const $v = useVuelidate(rules, hobby);

const handleSubmit = async () => {
  submitted.value = true;
  const isValid = await $v.value.$validate();
  if (!isValid) return;

  loading.value = true;
  await addHobby(hobby);
  loading.value = false;
};
</script>

<template>
  <form @submit.prevent="handleSubmit()">
    <section>
      <h3>{{ $t("Category") }}</h3>
      <CategorySelectInput
        v-model="$v.category.$model"
        :class="{ 'p-invalid': $v.category.$error }"
      />
      <ErrorMessages v-if="submitted" :errors="$v.category.$errors" />
    </section>

    <section>
      <h3>{{ $t("Name") }}</h3>
      <InputText
        v-model="$v.name.$model"
        class="w-full"
        :class="{ 'p-invalid': $v.name.$error }"
      />
      <ErrorMessages v-if="submitted" :errors="$v.name.$errors" />
    </section>

    <section>
      <h3>{{ $t("Status") }}</h3>
      <SelectButton
        v-model="$v.status.$model"
        :options="statusList"
        option-label="name"
        option-value="code"
        :class="{ 'p-invalid': $v.status.$error }"
      />
      <ErrorMessages v-if="submitted" :errors="$v.status.$errors" />
    </section>

    <section>
      <h3>{{ $t("Start Date") }}</h3>
      <Calendar
        v-model="$v.startDate.$model"
        date-format="dd.mm.yy"
        show-time
        class="w-full"
        :class="{ 'p-invalid': $v.status.$error }"
      />
    </section>

    <div class="flex justify-content-end pt-3">
      <PButton
        type="submit"
        :label="$t('Create')"
        icon="pi pi-plus"
        :loading="loading"
      />
    </div>
  </form>
</template>
