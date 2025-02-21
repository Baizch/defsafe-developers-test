import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null as any,
    token: null as string | null,
  }),

  actions: {
    async signIn(email: string, password: string) {
      const { $supabase } = useNuxtApp();

      const { data, error } = await $supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        console.error('Login error:', error.message);
        return null;
      }

      this.user = data.user;
      this.token = data.session?.access_token;

      localStorage.setItem('user', JSON.stringify(data.user));
      localStorage.setItem('token', this.token);

      await this.loadUserFromStorage();
      return data.user;
    },

    async signOut() {
      const { $supabase } = useNuxtApp();
      await $supabase.auth.signOut();

      this.user = null;
      this.token = null;

      if (!import.meta.env.SSR) {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
      }

      navigateTo('/admin/login');
    },

    async loadUserFromStorage() {
      if (!import.meta.env.SSR) {
        const storedUser = localStorage.getItem('user');
        const storedToken = localStorage.getItem('token');

        if (storedUser && storedToken) {
          this.user = JSON.parse(storedUser);
          this.token = storedToken;
          return;
        }
      }

      const { $supabase } = useNuxtApp();
      const { data, error } = await $supabase.auth.getSession();

      if (error || !data.session) {
        console.error('Error loading user:', error?.message || 'No session');
        this.user = null;
        this.token = null;
        return;
      }

      this.user = data.session.user;
      this.token = data.session.access_token;

      if (!import.meta.env.SSR) {
        localStorage.setItem('user', JSON.stringify(data.session.user));
        localStorage.setItem('token', data.session.access_token);
      }
    },
  },
});
