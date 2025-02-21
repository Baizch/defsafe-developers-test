import { useAuthStore } from '~/stores/auth';
import { storeToRefs } from 'pinia';

export default defineNuxtRouteMiddleware(async (to) => {
  if (!import.meta.env.SSR) {
    const authStore = useAuthStore();
    authStore.loadUserFromStorage();

    const { user } = storeToRefs(authStore);

    if (to.path.startsWith('/admin') && !user.value) {
      return navigateTo('/admin/login');
    }
  }
});
