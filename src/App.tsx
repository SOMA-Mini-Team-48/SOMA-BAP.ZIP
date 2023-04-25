import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import AddStorePage from './pages/AddStorePage';
import HeaderSection from './component/HeaderSection';
import { Container } from '@mui/material';
import ListPage from './pages/ListPage';
import DetailStorePage from './pages/DetailStorePage';
import ErrorPage from './pages/404Page';
import SearchModal from './component/SearchModal';

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
			<BrowserRouter>
				<HeaderSection />
				<SearchModal />
				<Routes>
					<Route
						path="/"
						element={<MainPage />}
						errorElement={<ErrorPage />}
					></Route>
					<Route
						path="/add-store"
						element={<AddStorePage />}
						errorElement={<ErrorPage />}
					></Route>
					<Route
						path="/current-list"
						element={<ListPage />}
						errorElement={<ErrorPage />}
					></Route>
					<Route
						path="/store/:id"
						element={<DetailStorePage />}
						errorElement={<ErrorPage />}
					></Route>
					<Route path="*" element={<ErrorPage />}></Route>
				</Routes>
			</BrowserRouter>
		</Container>
	);
};

export default App;
