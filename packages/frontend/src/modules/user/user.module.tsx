import React from 'react';
import UserProfileComponent from './components/user-profile/user-profile.component';
import { useAuthStore } from '~store/user.store';
import { useNavigate } from 'react-router-dom';
import { ROUTER_KEYS } from '~shared/keys';

export interface UserModuleProps {}

export default function UserModule({}: UserModuleProps): React.ReactNode {
	const { user, logout } = useAuthStore();
	const navigate = useNavigate();

	const handleLogout = async (): Promise<void> => {
		await logout();
		navigate(ROUTER_KEYS.ROOT);
	};

	return (
		<>
			<UserProfileComponent
				name={user.username}
				email={user.email}
				onLogout={handleLogout}
			/>
		</>
	);
}
