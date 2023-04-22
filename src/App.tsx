import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainPage from './pages/MainPage';
import AddStorePage from './pages/AddStorePage';
import HeaderSection from './component/HeaderSection';
import { Container } from '@mui/material';
import ListPage from './pages/ListPage';
import DetailStorePage from './pages/DetailStorePage';

const router = createBrowserRouter([
	{
		path: '/',
		element: <MainPage />,
		errorElement: <div>404</div>,
	},
	{
		path: 'add-store',
		element: <AddStorePage />,
	},
	{
		path: 'current-list',
		element: <ListPage />,
	},
	{
		path: 'store/:id',
		element: <DetailStorePage />,
	},
]);

const App = () => {
	return (
		<Container
			sx={{
				display: 'flex',
				flexDirection: 'column',
				height: '100%',
				width: '100%',
				overflow: 'hidden',
				padding: 0,
				margin: 0,
			}}
			maxWidth="lg"
		>
			<HeaderSection />
			<RouterProvider router={router} />
		</Container>
	);
};

export default App;
