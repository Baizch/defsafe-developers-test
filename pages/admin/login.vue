<template>
  <div class="flex h-screen p-10">
    <div
      class="w-1/2 bg-purple-700 relative flex flex-col items-center p-10 rounded-2xl shadow-lg"
    >
      <div class="w-80 mt-8">
        <h1 class="text-3xl font-semibold text-white mb-6 text-center">
          Welcome to the Cat Adoption Panel
        </h1>
      </div>
      <img
        src="/assets/Elements/Background.png"
        alt="Background Paws"
        class="absolute inset-0 w-full h-full object-cover color-gray-300 rounded-2xl"
      />
      <div class="relative text-center text-white z-10 flex-1 overflow-hidden">
        <img
          src="/assets/Elements/Cat.png"
          alt="Welcome Cat"
          class="max-w-full w-3/2 h-auto mt-4 relative"
        />
      </div>
    </div>

    <div class="w-1/2 flex items-center justify-center p-10 ml-48">
      <div class="max-w-md w-full space-y-6">
        <div class="flex items-center space-x-2">
          <UIcon name="ph:cat-fill" class="w-10 h-10 bg-purple-700" />
          <h2 class="text-xl font-semibold text-purple-700">
            Cat Adoption Platform
          </h2>
        </div>

        <UDivider />

        <h3 class="text-lg font-semibold text-black">Login</h3>

        <form class="space-y-4" @submit.prevent>
          <div>
            <label class="block text-sm font-medium text-purple-700 mb-2"
              >Username</label
            >
            <input
              type="text"
              placeholder="Enter the user name"
              class="w-full p-2 border rounded-lg focus:ring focus:ring-purple-300 bg-white text-black"
            />
          </div>

          <div>
            <label class="block text-sm font-medium text-purple-700 mb-2"
              >Password</label
            >
            <div class="relative">
              <input
                type="password"
                placeholder="Enter your password"
                class="w-full p-2 border rounded-lg focus:ring focus:ring-purple-300 bg-white text-black"
              />
              <UIcon
                class="absolute inset-y-3 right-4 flex items-center text-gray-500 cursor-pointer"
                name="mdi:eye"
              />
            </div>
          </div>

          <button
            type="submit"
            class="w-full bg-purple-700 text-white py-2 rounded-lg hover:bg-purple-800"
            @click="redirectToAdmin"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

function redirectToAdmin() {
  router.push('/admin');
}
</script>
