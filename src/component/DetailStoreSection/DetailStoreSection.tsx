import { Box, Button, Rating, Typography } from '@mui/material';
import React from 'react';
import { Review, Store } from '../../types/stores';
import { Edit, Map, Star } from '@mui/icons-material';
import StoreReviewSection from './StoreReviewSection';

type Props = {
	store: Store;
	setOpenModal: (value: boolean) => void;
	reviews: Review[] | [];
};

const DetailStoreSection = ({ store, setOpenModal, reviews }: Props) => {
	return (
		<Box sx={{ height: '100%', background: '#000' }}>
			<Box
				sx={{
					backgroundColor: 'white',
					height: '100%',
					textAlign: 'center',
					paddingTop: '25px',
					overflow: 'scroll',
					paddingBottom: '50px',
				}}
			>
				<Box
					sx={{
						fontSize: '100%',
						border: '5px solid #1976d2',
						width: '80%',
						margin: '0px auto',
						textAlign: 'center',
						marginBottom: '7px',
						overflow: 'hidden',
					}}
				>
					<Typography variant="h4" sx={{ fontWeight: 'bold', py: 1 }}>
						{store.name}
					</Typography>
					<Typography variant="body2" sx={{ pb: 1 }}>
						{store.description}
					</Typography>
					<Box
						sx={{
							display: 'flex',
							justifyContent: 'center',
							marginBottom: '10px',
						}}
					>
						<Box
							sx={{
								width: '200px',
								display: 'flex',
								alignItems: 'center',
							}}
						>
							<Rating
								value={store.totalRating}
								readOnly
								precision={0.5}
								emptyIcon={
									<Star style={{ opacity: 0.55 }} fontSize="inherit" />
								}
							/>
							<Box sx={{ ml: 0.3 }}>({store.reviewCount})</Box>
						</Box>
					</Box>
				</Box>
				<Box sx={{ display: 'flex', gap: 4, px: 2, py: 2 }}>
					<Button
						variant="outlined"
						sx={{ width: '80%' }}
						href={`${store.link}`}
						startIcon={<Map />}
					>
						카카오맵 바로가기
					</Button>
					<Button
						variant="outlined"
						sx={{ width: '80%' }}
						onClick={() => {
							setOpenModal(true);
						}}
						startIcon={<Edit />}
					>
						리뷰 작성하기
					</Button>
				</Box>
				<Typography
					variant="h6"
					sx={{ fontWeight: 'bold', py: 1, textAlign: 'left', px: 2 }}
				>
					소마인들의 리뷰
				</Typography>
				{reviews.sort((a, b) => b.date - a.date).length >= 1 ? (
					reviews.map((review) => (
						<StoreReviewSection review={review} key={review.id} />
					))
				) : (
					<></>
				)}
			</Box>
		</Box>
	);
};

export default DetailStoreSection;
