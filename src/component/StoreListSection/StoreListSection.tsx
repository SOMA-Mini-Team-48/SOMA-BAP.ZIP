import React from 'react';
import { Store } from '../../types/stores';
import StoreListItem from '../StoreListItem';
import { Box } from '@mui/material';

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
				<h1>데이터 없음</h1>
			)}
		</Box>
	);
};

export default StoreListSection;
