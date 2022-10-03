import { addHobby, getHobbies, removeHobby, updateHobby } from "@/api";
import type { Hobby } from "@/types";
import { defineStore } from "pinia";
import { computed, reactive, ref } from "vue";
import { useI18n } from "vue-i18n";

export const useHobby = defineStore("hobby", () => {
  const { t } = useI18n({ inheritLocale: true });
  const statusList = computed(() => [
    { name: t("status.Planning"), code: "started" },
    { name: t("status.Started"), code: "started" },
    { name: t("status.Paused"), code: "paused" },
    { name: t("status.Finished"), code: "finished" },
    { name: t("status.Abondoned"), code: "abondoned" },
  ]);

  const loadings = reactive({ get: false, save: false, remove: false });
  const errors = reactive({ get: "", save: "", remove: "" });
  const hobbies = ref<Hobby[]>([]);

  const get = async () => {
    try {
      loadings.get = true;
      hobbies.value = await getHobbies();
    } catch (e) {
      errors.get = e as string;
    } finally {
      loadings.get = false;
    }
  };

  const save = async (data: Hobby) => {
    try {
      loadings.save = true;
      if (data.id) {
        await updateHobby(data);
        const index = hobbies.value.findIndex((e) => e.id === data.id);
        if (!~index) hobbies.value[index] = data;
      } else {
        const res = await addHobby(data);
        hobbies.value.push(res);
      }
    } catch (e) {
      errors.save = e as string;
    } finally {
      loadings.save = false;
    }
  };

  const remove = async (data: Hobby) => {
    try {
      loadings.remove = true;
      await removeHobby(data);
      const index = hobbies.value.findIndex((e) => e.id === data.id);
      if (!~index) return;

      hobbies.value.splice(index, 1);
    } catch (e) {
      errors.remove = e as string;
    } finally {
      loadings.remove = false;
    }
  };

  return { statusList, hobbies, loadings, errors, get, remove, save };
});
