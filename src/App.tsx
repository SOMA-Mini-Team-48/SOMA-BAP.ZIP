import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import AddStorePage from './pages/AddStorePage';
import HeaderSection from './component/HeaderSection';
import { Container } from '@mui/material';
import ListPage from './pages/ListPage';
import DetailStorePage from './pages/DetailStorePage';

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
				<Routes>
					<Route path="/" element={<MainPage />}></Route>
					<Route path="/add-store" element={<AddStorePage />}></Route>
					{/* 상단에 위치하는 라우트들의 규칙을 모두 확인, 일치하는 라우트가 없는경우 처리 */}
					<Route path="/current-list" element={<ListPage />}></Route>
					<Route path="/store/:id" element={<DetailStorePage />}></Route>
				</Routes>
			</BrowserRouter>
		</Container>
	);
};

export default App;
