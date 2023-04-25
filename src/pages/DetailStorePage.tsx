import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useFirebaseIndivStoreData from '../hooks/useFirebaseIndivStoreData';
import { Box } from '@mui/material';
import Loading from '../component/Loading';

import DetailStoreSection from '../component/DetailStoreSection';
import ReviewWriteModal from '../component/ReviewWriteModal';
import useDetailStore from '../hooks/useDetailStore';

const DetailStorePage = () => {
	const param = useParams();
	const { id } = param;
	const { store, isLoading: storeLoading } = useDetailStore(id);
	const { reviews, isLoading: reviewLoading } = useFirebaseIndivStoreData(id);
	const [openReviewModal, setOpenReviewModal] = useState(false);
	if (reviewLoading || storeLoading) {
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
	return (
		<Box height={'100%'}>
			<DetailStoreSection
				store={store}
				setOpenModal={setOpenReviewModal}
				reviews={reviews}
			/>
			<ReviewWriteModal
				onClose={() => setOpenReviewModal(false)}
				open={openReviewModal}
				storeId={store.id}
				storeName={store.name}
			/>
		</Box>
	);
};

export default DetailStorePage;
