import React from 'react';
import { Link } from 'react-router-dom';
import { headerStyle, linkStyle, navStyle } from './header.styles';
import { ROUTER_KEYS } from '~shared/keys';
import { useAuth } from '~shared/hooks';

export interface HeaderModuleProps {}

export default function Header({}: HeaderModuleProps): React.ReactElement {
	const { isLoggedIn } = useAuth();

	return (
		<>
			<header className={headerStyle}>
				<nav className={navStyle}>
					{isLoggedIn ? (
						<>
							<Link
								to={ROUTER_KEYS.DASHBOARD}
								className={linkStyle}
							>
								Todo List
							</Link>
							<Link
								to={`${ROUTER_KEYS.DASHBOARD}${ROUTER_KEYS.MY_PROFILE}`}
								className={linkStyle}
							>
								My Profile
							</Link>
						</>
					) : (
						<>
							<Link to={ROUTER_KEYS.ROOT} className={linkStyle}>
								Home
							</Link>
							<Link to={ROUTER_KEYS.LOGIN} className={linkStyle}>
								Login
							</Link>
							<Link
								to={ROUTER_KEYS.REGISTER}
								className={linkStyle}
							>
								Register
							</Link>
						</>
					)}
				</nav>
			</header>
		</>
	);
}
