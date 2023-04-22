import React from 'react';
import { Store } from '../../types/stores';
import StoreListItem from '../StoreListItem';
import { Box, Typography } from '@mui/material';
import Lottie from 'lottie-react';
import emptyjson from '../../assets/empty.json';

type Props = {
	stores: Store[];
};

const StoreListSection = ({ stores }: Props) => {
	return (
		<Box>
			{stores && stores?.length >= 1 ? (
				stores.map((store: Store) => {
					return <StoreListItem store={store} key={store.id} />;
				})
			) : (
				<Box sx={{ width: '50%', margin: '0 auto' }}>
					<Typography variant="h6" sx={{ textAlign: 'center' }}>
						선택된 데이터가 없어요...
					</Typography>
					<Lottie animationData={emptyjson} size={10} />
				</Box>
			)}
		</Box>
	);
};

export default StoreListSection;
