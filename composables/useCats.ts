import { ref } from 'vue';

export const useCats = () => {
  const cats = ref<
    {
      id: number;
      image: string;
      name: string;
      description: string;
      createdAt: Date;
      updatedAt: Date;
    }[]
  >([]);

  const getCats = async () => {
    const { data, error } = await useFetch('/api/cats/list');
    if (data.value) {
      if (Array.isArray(data.value)) {
        cats.value = data.value.map((cat) => ({
          ...cat,
          createdAt: new Date(cat.createdAt),
          updatedAt: new Date(cat.updatedAt),
        }));
      } else {
        console.error('Unexpected data format:', data.value);
      }
    } else {
      console.error(error);
    }
  };

  const createCat = async (newCatData: {
    image: string;
    name: string;
    description: string;
  }) => {
    const { data, error } = await useFetch('/api/cats/create', {
      method: 'POST',
      body: newCatData,
    });
    if (data.value) {
      await getCats();
    } else {
      console.error(error);
    }
  };

  const updateCat = async (
    id: number,
    updatedCatData: { image?: string; name?: string; description?: string }
  ) => {
    const { data, error } = await useFetch(`/api/cats/edit?id=${id}`, {
      method: 'PUT',
      body: updatedCatData,
    });
    if (data.value) {
      await getCats();
    } else {
      console.error(error);
    }
  };

  const deleteCat = async (id: number) => {
    const { data, error } = await useFetch(`/api/cats/delete?id=${id}`, {
      method: 'DELETE',
    });
    if (data.value) {
      await getCats();
    } else {
      console.error(error);
    }
  };

  return {
    cats,
    getCats,
    createCat,
    updateCat,
    deleteCat,
  };
};
