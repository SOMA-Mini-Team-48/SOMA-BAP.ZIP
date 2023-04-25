import React, { useState } from 'react';
import { Box, Button, MenuItem, Select } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import { Store } from '../types/stores';
import { Map } from '@mui/icons-material';
import StoreListSection from '../component/StoreListSection';

const ListPage = () => {
	const location = useLocation();
	const stores = location.state?.stores ?? [];
	const navigate = useNavigate();
	const [sortBy, setSortBy] = useState('랜덤순');
	const [sortedStores, setSortedStores] = useState<Store[]>(stores);
	const handleMapButton = () => {
		navigate('/', { replace: true });
	};

	const changeSortBy = (e: {
		target: { value: React.SetStateAction<string> };
	}) => {
		const value = e.target.value.toString();
		setSortBy(value);
		sortStore(value);
	};
	const sortStore = (value: string) => {
		if (value == '랜덤순') {
			setSortedStores(sortedStores.sort(() => Math.random() - 0.5));
		} else if (value == '별점순') {
			setSortedStores(
				sortedStores.sort((a: Store, b: Store) => b.totalRating - a.totalRating)
			);
		} else {
			setSortedStores(
				sortedStores.sort((a: Store, b: Store) => b.reviewCount - a.reviewCount)
			);
		}
	};

	return (
		<Box
			sx={{
				height: '100%',
				bgcolor: '#fff',
				width: '100%',
				overflow: 'scroll',
			}}
		>
			<StoreListSection stores={sortedStores} />
			<Box sx={{ display: 'flex', justifyContent: 'end' }}>
				<Box
					sx={{
						position: 'absolute',
						bottom: 0,
						m: 1,
						display: 'flex',
						flexDirection: 'column',
						gap: 1,
					}}
				>
					<Select
						size="small"
						value={sortBy}
						onChange={changeSortBy}
						sx={{ bgcolor: '#fff' }}
					>
						<MenuItem value={'랜덤순'}>랜덤순</MenuItem>
						<MenuItem value={'별점순'}>별점순</MenuItem>
						<MenuItem value={'리뷰순'}>리뷰순</MenuItem>
					</Select>
					<Button
						startIcon={<Map />}
						variant="contained"
						onClick={handleMapButton}
					>
						지도
					</Button>
				</Box>
			</Box>
			<Box height={15} />
		</Box>
	);
};

export default ListPage;
