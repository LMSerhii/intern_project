import { useAuthStore } from '../../store/user.store';

type UseAuthReturnType = {
	isLoggedIn: boolean;
	isRefreshing: boolean;
	user: {
		username: string | null;
		email: string | null;
	};
};

export const useAuth = (): UseAuthReturnType => {
	const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
	const isRefreshing = useAuthStore((state) => state.isRefreshing);
	const user = useAuthStore((state) => state.user);

	return { isLoggedIn, isRefreshing, user };
};
