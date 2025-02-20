<template>
  <div class="container mx-auto p-4">
    <div id="title" class="flex space-x-2 items-center mt-8">
      <UIcon
        name="ph:cat-fill"
        class="w-10 h-10 text-white bg-purple-900 p-2 rounded-full"
      />
      <h2 class="font-semibold text-purple-900 text-xl">
        Cat Adoption Platform
      </h2>
    </div>
    <div class="border-b-2 pb-8"></div>

    <h1 class="text-purple-900 font-bold text-2xl mt-12">Cats for adoption</h1>
    <p class="text-gray-500 mt-4">
      Explore our list of lovable cats looking for their forever homes.
    </p>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
      <div
        v-for="cat in cats"
        :key="cat.id"
        class="bg-white border shadow-sm rounded-lg p-4"
      >
        <div class="flex justify-center p-2">
          <img
            class="h-48 w-full object-cover rounded-2xl"
            :src="cat.image"
            :alt="cat.name"
          />
        </div>

        <div class="p-4">
          <h5 class="text-lg font-semibold text-gray-900">
            {{ cat.name }}
          </h5>
          <p class="text-sm text-gray-600 mt-2">
            {{ cat.description }}
          </p>
          <button
            class="mt-6 w-full h-14 bg-purple-900 text-white py-2 rounded-lg transition hover:bg-purple-800"
          >
            Adopt
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const cats = [
  {
    id: 1,
    name: 'Theo',
    description: 'Curious and playful cat',
    image:
      'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 2,
    name: 'Max',
    description: 'Calm and affectionate cat',
    image:
      'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 3,
    name: 'Mimi',
    description: 'Friendly and sociable cat',
    image:
      'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 4,
    name: 'Luna',
    description: 'Loves cuddles and naps',
    image:
      'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
];
</script>
