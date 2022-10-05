<script setup lang="ts">
import { useAuth } from "@/stores/auth";
import InputText from "primevue/inputtext";
import Password from "primevue/password";
import Button from "primevue/button";
import InlineMessage from "primevue/inlinemessage";
import { useRouter } from "vue-router";
import { reactive } from "vue";

const { signUp, errors, loadings } = useAuth();
const router = useRouter();

const value = reactive({ email: "", password: "" });

const register = async () => {
  await signUp(value.email, value.password);
  if (!errors.signIn) {
    await router.push("/");
  }
};
</script>

<template lang="pug">
form(@submit.prevent="register")
  h2 Register
  span(class="p-float-label mb-3")
    InputText(
      id="email-register"
      type="text"
      class="w-full"
      v-model="value.email")
    label(for="email-register") Email
  span(class="p-float-label mb-3")
    Password(
      id="password-register"
      v-model="value.password"
      class="w-full"
      input-class="w-full"
      toggle-mask)
    label(for="password-register") Password
  Button(
    type="submit"
    label="Register"
    class="p-button-lg"
    :loading="loadings.signUp")
  InlineMessage(v-if="errors.signUp" severity="error" class="mt-3") {{ errors.signUp }}
</template>
