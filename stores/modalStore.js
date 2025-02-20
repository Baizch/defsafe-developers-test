import { defineStore } from 'pinia';

export const useModalStore = defineStore('modal', {
  state: () => ({
    isCreateModalOpen: false,
    isEditModalOpen: false,
    isDeleteModalOpen: false,
    action: null,
    catToEdit: {
      name: '',
      image: '',
      description: '',
    },
  }),
  actions: {
    openCreateModal() {
      this.isCreateModalOpen = true;
      this.action = 'create';
    },
    openEditModal(cat) {
      this.isEditModalOpen = true;
      this.action = 'edit';
      this.catToEdit = { ...cat };
    },
    openDeleteModal(cat) {
      this.isDeleteModalOpen = true;
      this.catToEdit = { ...cat };
    },
    closeModals() {
      this.isCreateModalOpen = false;
      this.isEditModalOpen = false;
      this.isDeleteModalOpen = false;
      this.catToEdit = { name: '', image: '', description: '' };
    },
  },
});
