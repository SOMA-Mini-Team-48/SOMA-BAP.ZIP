import React from 'react';
import { useLocation } from 'react-router-dom';
import useFirebaseIndivStoreData from '../hooks/useFirebaseIndivStoreData';
import { Box } from '@mui/material';
import Loading from '../component/Loading';
import IndivStoreSection from '../component/IndivStoreSection';

const DetailStorePage = () => {
	const location = useLocation();
	const indivStore = location.state?.store ?? null;
	const { reviews, isLoading } = useFirebaseIndivStoreData(indivStore.id);
	if (isLoading) {
		return (
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'center',
					flexDirection: 'column',
					alignItems: 'center',
					height: '100%',
				}}
			>
				<Loading />
			</Box>
		);
	}
	return <IndivStoreSection />;
};

export default DetailStorePage;
