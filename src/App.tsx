import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainPage from './pages/MainPage';
import AddStorePage from './pages/AddStorePage';
import HeaderSection from './component/HeaderSection';
import { Container } from '@mui/material';
import ListPage from './pages/ListPage';

const router = createBrowserRouter([
	{
		path: '/',
		element: <MainPage />,
	},
	{
		path: 'add-store',
		element: <AddStorePage />,
	},
	{
		path: 'current-list',
		element: <ListPage />,
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
		>
			<HeaderSection />
			<RouterProvider router={router} />
		</Container>
	);
};

export default App;
