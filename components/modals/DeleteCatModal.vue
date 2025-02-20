<script setup lang="ts">
import { useModalStore } from '~/stores/modalStore';

const modalStore = useModalStore();

const catToDelete = computed(() => modalStore.catToEdit);

function onDelete() {
  console.log('Deleting cat:', catToDelete.value);
  modalStore.closeModals();
}
</script>

<template>
  <UModal v-model="modalStore.isDeleteModalOpen" :ui="{ width: 'w-80' }">
    <UCard :ui="{ background: '!bg-white' }">
      <div class="p-6 flex flex-col items-center text-center">
        <button class="bg-red-50 text-red-600 px-3 py-2 rounded-lg mb-8">
          <UIcon name="mdi:delete" class="w-5 h-5" />
        </button>
        <h1 class="text-black font-bold">Are You Sure?</h1>
        <p class="mt-8 text-gray-500">
          Are you sure you want to delete this cat profile? This action cannot
          be undone.
        </p>
        <div class="flex space-x-2 mt-8 justify-center">
          <button
            type="button"
            class="bg-gray-100 text-black h-12 px-6 rounded-lg"
            @click="modalStore.closeModals"
          >
            Cancel
          </button>
          <button
            type="button"
            class="bg-red-500 h-12 px-6 rounded-lg"
            @click="onDelete"
          >
            Delete
          </button>
        </div>
      </div>
    </UCard>
  </UModal>
</template>
