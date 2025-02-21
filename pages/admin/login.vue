<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useAuthStore } from '~/stores/auth';
import { z } from 'zod';
import type { FormSubmitEvent } from '#ui/types';

const router = useRouter();
const authStore = useAuthStore();

const schema = z.object({
  email: z.string().email('Enter a valid email'),
  password: z.string().min(6, 'Pasword must be at least 6 characters'),
});

type Schema = z.output<typeof schema>;

const state = reactive({
  email: '',
  password: '',
});

const showPassword = ref(false);
const errorMessage = ref('');
const loading = ref(false);

async function onSubmit(event: FormSubmitEvent<Schema>) {
  errorMessage.value = '';
  loading.value = true;

  const user = await authStore.signIn(event.data.email, event.data.password);

  loading.value = false;

  if (!user) {
    errorMessage.value = 'Invalid email or password';
    return;
  }

  router.push('/admin');
}
</script>

<template>
  <div class="flex h-screen p-10">
    <div
      class="w-1/2 bg-purple-800 relative flex flex-col items-center p-10 rounded-2xl shadow-lg"
    >
      <div class="w-80 mt-8">
        <h1 class="text-3xl font-semibold text-white mb-6 text-center">
          Welcome to the Cat Adoption Panel
        </h1>
      </div>
      <img
        src="/assets/Elements/Background.png"
        alt="Background Paws"
        class="absolute inset-0 w-full h-full object-cover rounded-2xl"
      />
      <div class="relative text-center text-white z-10 flex-1">
        <img
          src="/assets/Elements/Cat.png"
          alt="Welcome Cat"
          class="max-w-full w-3/2 relative"
        />
      </div>
    </div>

    <div class="w-1/2 flex items-center justify-center p-10 ml-48">
      <div class="max-w-md w-full space-y-6">
        <div class="flex items-center space-x-2">
          <UIcon name="ph:cat-fill" class="w-10 h-10 bg-purple-900" />
          <h2 class="text-xl font-semibold text-purple-900">
            Cat Adoption Platform
          </h2>
        </div>
        <div class="border-b-2 pb-8"></div>

        <h3 class="text-lg font-semibold text-black">Login</h3>

        <UForm
          :schema="schema"
          :state="state"
          class="space-y-4"
          @submit="onSubmit"
        >
          <UFormGroup name="email">
            <label class="block text-sm font-bold text-purple-900 mb-2"
              >Username</label
            >
            <input
              v-model="state.email"
              type="text"
              placeholder="Enter the user name"
              class="w-full p-2 border rounded-lg focus:ring focus:ring-purple-300 bg-white text-black"
            />
          </UFormGroup>

          <UFormGroup name="password">
            <label class="block text-sm font-bold text-purple-900 mb-2"
              >Password</label
            >
            <div class="relative">
              <input
                v-model="state.password"
                :type="!showPassword ? 'password' : 'text'"
                placeholder="Enter your password"
                class="w-full p-2 border rounded-lg focus:ring focus:ring-purple-300 bg-white text-black"
              />
              <UIcon
                class="absolute inset-y-3 right-4 flex items-center text-gray-500 cursor-pointer"
                :name="showPassword ? 'famicons:eye-off' : 'mdi:eye'"
                @click="showPassword = !showPassword"
              />
            </div>
          </UFormGroup>

          <p v-if="errorMessage" class="text-red-500 text-sm">
            {{ errorMessage }}
          </p>

          <button
            type="submit"
            :disabled="loading"
            class="w-full bg-purple-900 text-white py-2 rounded-lg hover:bg-purple-800"
          >
            <UIcon
              v-if="loading"
              name="mdi:loading"
              class="animate-spin w-5 h-5 mr-2"
            />
            Login
          </button>
        </UForm>
      </div>
    </div>
  </div>
</template>
