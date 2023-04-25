import { Box, Typography, Paper } from '@mui/material';
import React from 'react';
import { Review } from '../../types/stores';
import { ReviewBox, CustomStar } from './StoreReview.style';

const StoreReviewSection = ({ review }: { review: Review }) => {
	return (
		<Box style={{ border: 5, borderColor: 'black', textAlign: 'left' }}>
			<ReviewBox>
				<Typography variant="h6" sx={{ fontWeight: '600' }}>
					{review.username}
				</Typography>
				<Typography variant="body1" gutterBottom color="text.secondary">
					{review.content}
				</Typography>

				<Box
					sx={{
						display: 'flex',
						alignItems: 'center',
						marginBottom: '16px',
					}}
				>
					<CustomStar />
					<Typography variant="body1">{review.rating?.toFixed(1)}</Typography>
				</Box>
				<hr style={{ color: 'gray' }} />
			</ReviewBox>
		</Box>
	);
};

export default StoreReviewSection;
