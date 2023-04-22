import React from 'react';
import { Box, Chip, Divider, Typography } from '@mui/material';
import { Store } from '../../types/stores';
import { ContentBox, CustomStar } from './StoreListItem.style';
import { useNavigate } from 'react-router-dom';
import { typeToKoreanArr } from '../../utils/markerIcons';

const StoreListItem = ({ store }: { store: Store }) => {
	const navigate = useNavigate();
	const handleStoreClick = () => {
		navigate(`/store/${store.id}`, { state: { store } });
	};
	return (
		<Box>
			<ContentBox>
				<Chip
					label={typeToKoreanArr[store.type]}
					size="small"
					sx={{
						mb: 1,
					}}
				/>
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
						marginBottom: '8px',
					}}
				>
					<CustomStar />
					<Typography variant="body1">
						{store.totalRating?.toFixed(1)}&nbsp;
					</Typography>
					<Typography variant="body2" color="textSecondary">
						({store.reviewCount} 리뷰)
					</Typography>
				</Box>
			</ContentBox>
			<Divider />
		</Box>
	);
};

export default StoreListItem;
