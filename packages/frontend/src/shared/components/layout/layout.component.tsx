import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Header from '~modules/header/header.module';

export default function Layout(): React.ReactElement {
	return (
		<>
			<Suspense fallback={null}>
				<Header />
				<main style={{ minHeight: '100vh' }}>
					<Outlet />
				</main>
			</Suspense>
			<Toaster position="top-right" reverseOrder={false} />
		</>
	);
}
