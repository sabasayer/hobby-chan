<script setup lang="ts">
import { useAuth } from "@/stores/auth";
import InputText from "primevue/inputtext";
import Password from "primevue/password";
import Button from "primevue/button";
import InlineMessage from "primevue/inlinemessage";
import { reactive } from "vue";
import { useRouter } from "vue-router";

const { signIn, errors, loadings } = useAuth();
const router = useRouter();

const value = reactive({ email: "", password: "" });

const login = async () => {
  await signIn(value.email, value.password);
  if (!errors.signIn) {
    router.push("/");
  }
};
</script>

<template>
  <form @submit.prevent="login">
    <h2>Login</h2>
    <span class="p-float-label mb-3">
      <InputText id="email" type="text" class="w-full" v-model="value.email" />
      <label for="email">Email</label>
    </span>
    <span class="p-float-label mb-3">
      <Password
        id="password"
        v-model="value.password"
        class="w-full"
        input-class="w-full"
        toggle-mask
        :feedback="false"
      />
      <label for="password">Password</label>
    </span>
    <Button
      type="submit"
      label="Login"
      class="p-button-lg"
      :loading="loadings.signIn"
    />

    <InlineMessage v-if="errors.signIn" severity="error" class="mt-3">
      {{ errors.signIn }}
    </InlineMessage>
  </form>
</template>
