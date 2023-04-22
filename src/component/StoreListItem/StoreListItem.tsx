import React from 'react';
import { Box, Typography } from '@mui/material';
import { Store } from '../../types/stores';
import { ContentBox, CustomStar } from './StoreListItem.style';
import { useNavigate } from 'react-router-dom';

const StoreListItem = ({ store }: { store: Store }) => {
	const navigate = useNavigate();
	const handleStoreClick = () => {
		navigate(`/store/${store.id}`, { state: { store } });
	};
	return (
		<Box>
			<ContentBox>
				<Typography
					variant="h6"
					sx={{ fontWeight: '600' }}
					onClick={handleStoreClick}
				>
					{store.name}
				</Typography>
				<Typography variant="body2" gutterBottom color="text.secondary">
					{store.description}
				</Typography>

				<Box
					sx={{
						display: 'flex',
						alignItems: 'center',
						marginBottom: '16px',
					}}
				>
					<CustomStar />
					<Typography variant="body1">
						{store.totalRating?.toFixed(1)}
					</Typography>
					<Typography variant="body2" color="textSecondary">
						({store.reviewCount} 리뷰)
					</Typography>
				</Box>
			</ContentBox>
		</Box>
	);
};

export default StoreListItem;
