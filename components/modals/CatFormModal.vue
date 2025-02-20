<script setup lang="ts">
import { useModalStore } from '~/stores/modalStore';
import { z } from 'zod';
import type { FormSubmitEvent } from '#ui/types';

const modalStore = useModalStore();

const schema = z.object({
  image: z.string().url('Enter a valid URL'),
  name: z.string().min(2, 'Name must be at least 2 characters'),
  description: z.string().min(10, 'Description must be at least 10 characters'),
});

type Schema = z.output<typeof schema>;

const state = reactive({
  image: '',
  name: '',
  description: '',
});

const isEditMode = computed(() => modalStore.action === 'edit');

const showModal = computed(() => {
  return modalStore.action === 'edit'
    ? modalStore.isEditModalOpen
    : modalStore.isCreateModalOpen;
});

watch(
  () => modalStore.catToEdit,
  (newCatToEdit) => {
    if (modalStore.action === 'edit' && newCatToEdit) {
      state.image = newCatToEdit.image || '';
      state.name = newCatToEdit.name || '';
      state.description = newCatToEdit.description || '';
    } else {
      state.image = '';
      state.name = '';
      state.description = '';
    }
  },
  { immediate: true }
);

async function onSubmit(event: FormSubmitEvent<Schema>) {
  if (isEditMode.value) {
    console.log('Updating cat:', event.data);
  } else {
    console.log('Creating new cat:', event.data);
  }
  modalStore.closeModals();
}
</script>

<template>
  <UModal v-model="showModal">
    <UCard class="w-full max-w-lg" :ui="{ background: '!bg-white' }">
      <div class="flex justify-between items-center">
        <h2 class="text-xl font-semibold text-gray-900">
          {{ isEditMode ? 'Edit Cat' : 'Register New Cat' }}
        </h2>
        <button @click="modalStore.closeModals" class="bg-gray-100 rounded-2xl">
          <UIcon name="i-heroicons-x-mark" class="w-6 h-4 bg-red-500 py-1" />
        </button>
      </div>
      <div class="border-b-2 pb-8 mb-8"></div>

      <UForm
        :schema="schema"
        :state="state"
        class="space-y-4"
        @submit="onSubmit"
      >
        <UFormGroup name="image">
          <label class="text-purple-900 font-semibold">Image</label>
          <div class="flex items-center">
            <input
              v-model="state.image"
              placeholder="URL and Upload"
              class="bg-white p-4 border border-gray-300 rounded-lg mt-2 w-full text-black pr-14 overflow-hidden truncate"
            />
            <UIcon
              name="tabler:camera-filled"
              class="w-8 h-6 bg-purple-900 absolute right-10 mt-2"
            />
          </div>
        </UFormGroup>

        <UFormGroup name="name">
          <label class="text-purple-900 font-semibold">Name</label>
          <input
            v-model="state.name"
            placeholder="Enter the cat's name"
            class="bg-white p-4 border border-gray-300 rounded-lg mt-2 w-full text-black"
          />
        </UFormGroup>

        <UFormGroup name="description">
          <label class="text-purple-900 font-semibold">Description</label>
          <textarea
            v-model="state.description"
            placeholder="Write here..."
            class="bg-white p-4 border border-gray-300 rounded-lg mt-2 w-full text-black h-32"
          ></textarea>
        </UFormGroup>

        <div class="flex justify-end space-x-2">
          <button
            type="button"
            class="bg-gray-100 text-black h-12 px-6 rounded-lg"
            @click="modalStore.closeModals"
          >
            Cancel
          </button>
          <button type="submit" class="bg-purple-900 h-12 px-6 rounded-lg">
            Save
          </button>
        </div>
      </UForm>
    </UCard>
  </UModal>
</template>
