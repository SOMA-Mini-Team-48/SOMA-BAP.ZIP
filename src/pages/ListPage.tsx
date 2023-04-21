import React from 'react';
import { Box, Button } from '@mui/material';
import StoreListItem from '../component/StoreListItem';
import { useLocation, useNavigate } from 'react-router-dom';
import { Store } from '../types/stores';
import { Map } from '@mui/icons-material';

const ListPage = () => {
	const location = useLocation();
	const stores = location.state?.stores ?? [];
	const navigate = useNavigate();

	const handleMapButton = () => {
		navigate('/');
	};
	return (
		<Box height={'100%'} bgcolor={'#fff'} overflow="scroll">
			{stores && stores?.length >= 1 ? (
				stores.map((store: Store) => {
					return <StoreListItem store={store} key={store.id} />;
				})
			) : (
				<h1>데이터 없음</h1>
			)}
			<Box>
				<Button
					sx={{ position: 'absolute', bottom: 0, m: 1 }}
					startIcon={<Map />}
					variant="contained"
					onClick={handleMapButton}
				>
					지도
				</Button>
			</Box>
		</Box>
	);
};

export default ListPage;
