import { getHobbies } from "@/api";
import type { Hobby } from "@/types";
import { computed, ref } from "vue";
import { useI18n } from "vue-i18n";

export const useHobby = () => {
  const { t } = useI18n({ inheritLocale: true });
  const statusList = computed(() => [
    { name: t("status.Planning"), code: "started" },
    { name: t("status.Started"), code: "started" },
    { name: t("status.Paused"), code: "paused" },
    { name: t("status.Finished"), code: "finished" },
    { name: t("status.Abondoned"), code: "abondoned" },
  ]);

  const loading = ref(false);
  const error = ref("");
  const hobbies = ref<Hobby[]>([]);

  const get = async () => {
    try {
      loading.value = true;
      hobbies.value = await getHobbies();
    } catch (e) {
      error.value = e as string;
    } finally {
      loading.value = false;
    }
  };

  return { statusList, hobbies, loading, error, get };
};
