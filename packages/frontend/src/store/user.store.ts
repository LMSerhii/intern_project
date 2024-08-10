// src/store/authStore.ts
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import userService from '../shared/services/user.service';
import { STORAGE_KEYS } from '~shared/keys';

export interface AuthState {
	token: string | null;
	user: { username: string | null; email: string | null };
	error: string | null;
	isLoggedIn: boolean;
	isRefreshing: boolean;

	login: (email: string, password: string) => Promise<void>;
	register: (email: string, password: string) => Promise<void>;
	logout: () => Promise<void>;
	fetchCurrentUser: () => Promise<void>;
	changePassword: (oldPassword: string, newPassword: string) => Promise<void>;
	forgotPassword: (email: string) => Promise<void>;
	resetPassword: (newPassword: string, otp: string) => Promise<void>;
}

export const useAuthStore = create<AuthState>()(
	persist(
		(set) => ({
			token: null,
			user: { username: null, email: null },
			error: null,
			isLoggedIn: false,
			isRefreshing: false,

			login: async (email, password): Promise<void> => {
				set({ isRefreshing: true, error: null });

				try {
					const response = await userService.login({
						email,
						password,
					});

					set({
						token: response.token,
						user: {
							username: response.user.username,
							email: response.user.email,
						},
						isLoggedIn: true,
					});
				} catch (error) {
					set({ error: error.message });
				} finally {
					set({ isRefreshing: false });
				}
			},

			register: async (email, password): Promise<void> => {
				set({ isRefreshing: true, error: null });

				try {
					await userService.register({
						email,
						password,
					});
				} catch (error) {
					set({ error: error.message });
				} finally {
					set({ isRefreshing: false });
				}
			},

			logout: async (): Promise<void> => {
				set({ isRefreshing: true, error: null });

				try {
					await userService.logout();

					set({
						isLoggedIn: false,
						user: { username: null, email: null },
						token: null,
					});
				} catch (error) {
					set({ error: error.message });
				} finally {
					set({ isRefreshing: false });
				}
			},

			fetchCurrentUser: async (): Promise<void> => {
				set({ isRefreshing: true, error: null });

				try {
					const data = await userService.current();

					set({
						user: { username: data.username, email: data.email },
						isLoggedIn: true,
					});
				} catch (error) {
					set({ error: error.message });
				} finally {
					set({ isRefreshing: false });
				}
			},

			changePassword: async (oldPassword, newPassword): Promise<void> => {
				set({ isRefreshing: true, error: null });

				try {
					await userService.changePassword({
						oldPassword,
						newPassword,
					});
				} catch (error) {
					set({ error: error.message });
				} finally {
					set({ isRefreshing: false });
				}
			},

			forgotPassword: async (email): Promise<void> => {
				set({ isRefreshing: true, error: null });

				try {
					await userService.forgotPassword({ email });
				} catch (error) {
					set({ error: error.message });
				} finally {
					set({ isRefreshing: false });
				}
			},

			resetPassword: async (newPassword, otp): Promise<void> => {
				set({ isRefreshing: true, error: null });

				try {
					await userService.resetPassword({
						password: newPassword,
						otp,
					});
				} catch (error) {
					set({ error: error.message });
				} finally {
					set({ isRefreshing: false });
				}
			},
		}),

		{
			name: STORAGE_KEYS.AUTH,
			storage: createJSONStorage(() => localStorage),
		},
	),
);
