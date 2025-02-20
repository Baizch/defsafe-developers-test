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

async function onSubmit(event: FormSubmitEvent<Schema>) {
  console.log('Form submitted:', event.data);
  modalStore.closeModal();
}
</script>

<template>
  <UModal v-model="modalStore.isOpen">
    <UCard class="w-full max-w-lg !bg-white">
      <template #header>
        <div class="flex justify-between items-center">
          <h2 class="text-xl font-semibold text-gray-900">Register New Cat</h2>
          <button
            @click="modalStore.closeModal"
            class="bg-gray-100 rounded-2xl"
          >
            <UIcon name="i-heroicons-x-mark" class="w-6 h-4 bg-red-500 py-1" />
          </button>
        </div>
        <div class="border-b-2 pb-8"></div>
      </template>

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
              class="bg-white p-4 border border-gray-300 rounded-lg mt-2 w-full"
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
            v-model="state.image"
            placeholder="Enter the cat's name"
            class="bg-white p-4 border border-gray-300 rounded-lg mt-2 w-full"
          />
        </UFormGroup>

        <UFormGroup name="description">
          <label class="text-purple-900 font-semibold">Description</label>
          <textarea
            placeholder="Write here..."
            class="bg-white p-4 border border-gray-300 rounded-lg mt-2 w-full text-black h-32"
          ></textarea>
        </UFormGroup>

        <div class="flex justify-end space-x-2">
          <button
            type="button"
            class="bg-gray-100 text-black h-12 px-6 rounded-lg"
            @click="modalStore.closeModal"
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
