import * as React from 'react';
import { privateRoutes, publicRoutes } from './routes';
import { Route, Routes } from 'react-router-dom';
import { useAuth } from '~shared/hooks';
import LoaderComponent from '~shared/components/loader/loader.component';
import { ROUTER_KEYS } from '~shared/keys';
import Layout from '~shared/components/layout/layout.component';

const Router: React.FunctionComponent = () => {
	const { isLoggedIn, isRefreshing } = useAuth();

	return (
		<>
			{isRefreshing ? (
				<LoaderComponent />
			) : (
				<Routes>
					<Route path={ROUTER_KEYS.ROOT} element={<Layout />}>
						{isLoggedIn ? privateRoutes : publicRoutes}
					</Route>
				</Routes>
			)}
		</>
	);
};

export default Router;
