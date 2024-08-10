import React from 'react';
import UserModule from '~modules/user/user.module';

export interface MyProfilePageProps {}

export default function MyProfilePage({}: MyProfilePageProps): React.ReactElement {
	return (
		<>
			<UserModule />
		</>
	);
}
