import * as React from 'react';
import { Route } from 'react-router-dom';
import {
	DashboardPage,
	ForgotPasswordPage,
	HomePage,
	LoginPage,
	MyProfilePage,
	RegisterPage,
	ResetPasswordPage,
	TodoAddPage,
	TodoDetailsPage,
	TodoEditPage,
} from '~/pages';
import NotFoundPage from '~/pages/not-found.page';

import { ROUTER_KEYS } from '~shared/keys';

export const publicRoutes = (
	<>
		<Route index element={<HomePage />} />
		<Route path={ROUTER_KEYS.LOGIN} element={<LoginPage />} />
		<Route path={ROUTER_KEYS.REGISTER} element={<RegisterPage />} />
		<Route
			path={`${ROUTER_KEYS.FORGOT_PASSWORD}`}
			element={<ForgotPasswordPage />}
		/>
		<Route
			path={`${ROUTER_KEYS.RESET_PASSWORD}`}
			element={<ResetPasswordPage />}
		/>
	</>
);

export const privateRoutes = (
	<>
		<Route index path={ROUTER_KEYS.DASHBOARD} element={<DashboardPage />} />
		<Route
			path={`${ROUTER_KEYS.DASHBOARD}${ROUTER_KEYS.MY_PROFILE}`}
			element={<MyProfilePage />}
		/>

		<Route
			path={`${ROUTER_KEYS.DASHBOARD}${ROUTER_KEYS.TODO}`}
			element={<TodoDetailsPage />}
		/>
		<Route
			path={`${ROUTER_KEYS.DASHBOARD}${ROUTER_KEYS.TODO}${ROUTER_KEYS.ADD_TODO}`}
			element={<TodoAddPage />}
		/>
		<Route
			path={`${ROUTER_KEYS.DASHBOARD}${ROUTER_KEYS.TODO}${ROUTER_KEYS.EDIT_TODO}`}
			element={<TodoEditPage />}
		/>
		<Route path={`${ROUTER_KEYS.ALL_MATCH}`} element={<NotFoundPage />} />
	</>
);
