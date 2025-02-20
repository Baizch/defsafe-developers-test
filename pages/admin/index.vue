<template>
  <div id="view" class="h-full w-screen flex flex-row">
    <CatFormModal />
    <div
      id="sidebar"
      class="bg-white h-screen md:block shadow-xl px-3 w-30 md:w-60 lg:w-60 overflow-x-hidden transition-transform duration-300 ease-in-out"
    >
      <div class="space-y-6 md:space-y-10 mt-10">
        <div id="title" class="flex space-x-2 items-center border-b-2 pb-8">
          <UIcon name="ph:cat-fill" class="w-10 h-10 bg-purple-900" />
          <h2 class="font-semibold text-purple-900">Cat Adoption Platform</h2>
        </div>
        <div id="menu" class="flex flex-col space-y-6">
          <p class="text-gray-400 ml-2">MAIN MENU</p>
          <div class="flex items-center space-x-6">
            <UIcon name="solar:cat-bold" class="w-8 h-8 bg-purple-900 ml-2" />
            <p class="text-purple-900 font-bold">Cat List</p>
          </div>
        </div>
      </div>
    </div>

    <div class="flex-1 w-full flex flex-col mt-14">
      <div class="flex justify-between p-4 ml-12 mr-12 mb-8">
        <div class="flex items-center space-x-8">
          <UButton class="!bg-purple-200">
            <UIcon name="solar:cat-bold" class="w-10 h-10 bg-purple-900 ml-2" />
          </UButton>
          <h1 class="text-2xl text-black font-bold flex items-center gap-2">
            Cat List
          </h1>
        </div>
        <div>
          <UButton
            class="!bg-purple-900 !text-white h-12 w-24 flex items-center justify-center"
            variant="solid"
            @click="modalStore.openModal()"
          >
            New Cat
          </UButton>
        </div>
      </div>

      <div class="overflow-x-auto rounded-xl ml-12 mr-16">
        <table
          class="min-w-full divide-y divide-gray-300 border border-gray-300 rounded-lg"
        >
          <thead class="bg-gray-50">
            <tr>
              <th
                class="px-6 py-4 text-left text-xs font-bold tracking-wider"
                style="color: #4e2096"
              >
                Image
              </th>
              <th
                class="px-6 py-4 text-left text-xs font-bold tracking-wider"
                style="color: #4e2096"
              >
                Name
              </th>
              <th
                class="px-6 py-4 text-left text-xs font-bold tracking-wider"
                style="color: #4e2096"
              >
                Description
              </th>
              <th
                class="px-6 py-4 text-left text-xs font-bold tracking-wider float-right"
                style="color: #4e2096"
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr v-for="cat in cats" :key="cat.id">
              <td class="px-6 py-4 whitespace-nowrap">
                <img
                  :src="cat.image"
                  :alt="cat.name"
                  class="h-12 w-12 rounded-full object-cover border border-gray-200"
                />
              </td>
              <td
                class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
              >
                {{ cat.name }}
              </td>
              <td class="px-6 py-4 whitespace-normal text-sm text-gray-500">
                {{ cat.description }}
              </td>
              <td
                class="px-6 py-6 whitespace-nowrap text-sm font-medium flex items-center gap-2 float-right"
              >
                <button
                  class="bg-purple-50 text-purple-600 px-3 py-2 rounded-lg flex items-center justify-center gap-1"
                >
                  <UIcon name="mdi:pencil" class="w-5 h-5 !bg-purple-900" />
                </button>
                <button
                  class="bg-red-50 text-red-600 px-3 py-2 rounded-lg flex items-center justify-center gap-1"
                >
                  <UIcon name="mdi:delete" class="w-5 h-5" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import CatFormModal from '~/components/modals/CatFormModal.vue';
import { useModalStore } from '~/stores/modalStore';

const modalStore = useModalStore();

const cats = ref([
  {
    id: 1,
    name: 'Miau',
    description: 'Gato fofo',
    image: '',
  },
  {
    id: 2,
    name: 'Felix',
    description: 'Gato brincalhão',
    image: '',
  },
]);
</script>
