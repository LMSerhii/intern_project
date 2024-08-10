import React, { useState } from 'react';
import { Modal } from '~shared/components/Modal/modal.component';
import ChangePasswordComponent from '../change-password/change-password.component';
import {
	avatarStyle,
	buttonStyle,
	buttonWrapper,
	containerStyle,
	emailStyle,
	infoStyle,
	nameStyle,
} from './user-profile.styles';

export interface UserProfileComponentProps {
	name: string;
	email: string;
	onLogout?: () => void;
}

export default function UserProfileComponent({
	name,
	email,
	onLogout,
}: UserProfileComponentProps): React.ReactElement {
	const [active, setActive] = useState(false);
	return (
		<>
			<div className={containerStyle}>
				<div className={avatarStyle}></div>
				<div className={infoStyle}>
					<div className={nameStyle}>{name}</div>
					<div className={emailStyle}>{email}</div>
					<div className={buttonWrapper}>
						<button
							className={buttonStyle}
							onClick={() => setActive(true)}
						>
							Edit Profile
						</button>
						<button className={buttonStyle} onClick={onLogout}>
							Logout
						</button>
					</div>
				</div>
			</div>
			<Modal active={active} setActive={setActive}>
				<ChangePasswordComponent />
			</Modal>
		</>
	);
}
