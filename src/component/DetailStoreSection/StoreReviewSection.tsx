import { Box, Divider, Typography } from '@mui/material';
import React from 'react';
import { Review } from '../../types/stores';
import { ReviewBox, CustomStar } from './StoreReview.style';
import getTimeAgo from '../../utils/getTimeAgo';

const StoreReviewSection = ({ review }: { review: Review }) => {
	return (
		<Box style={{ border: 5, borderColor: 'black', textAlign: 'left' }}>
			<ReviewBox>
				<Typography variant="body1" sx={{ fontWeight: '600' }}>
					{review.username} &nbsp;
					<Typography variant="caption" color="text.secondary">
						{getTimeAgo(review.date)}
					</Typography>
				</Typography>
				<Typography variant="body2" gutterBottom color="text.secondary">
					{review.content}
				</Typography>

				<Box
					sx={{
						display: 'flex',
						alignItems: 'center',
						marginBottom: '16px',
					}}
				>
					<CustomStar fontSize="small" />
					<Typography variant="body2">{review.rating?.toFixed(1)}</Typography>
				</Box>
				<Divider />
			</ReviewBox>
		</Box>
	);
};

export default StoreReviewSection;
