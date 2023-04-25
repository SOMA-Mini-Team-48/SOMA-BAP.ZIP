import { Box, Button, Rating, Typography } from '@mui/material';
import React from 'react';
import { Store } from '../../types/stores';
import { Star } from '@mui/icons-material';
import StoreReviewSection from './StoreReviewSection';

type Props = {
	store: Store;
	reviews: any;
};

const DetailStoreSection = ({ store, reviews }: Props) => {
	return (
		<Box sx={{ heigth: '100%', background: '#000' }}>
			<Box
				sx={{
					marginTop: '10px',
					backgroundColor: 'white',
					height: '100%',
					textAlign: 'center',
					paddingTop: '25px',
				}}
			>
				<div
					style={{
						fontSize: '100%',
						border: '5px solid #1976d2',
						width: '80%',
						margin: '0px auto',
						textAlign: 'center',
						marginBottom: '7px',
					}}
				>
					<h1
						style={{
							marginBottom: '1px',
							fontSize: '1.5em',
						}}
					>
						{store.name}
					</h1>
					<span
						style={{
							fontSize: '0.9em',
							display: 'block',
							paddingBottom: '7px',
						}}
					>
						{store.description}
					</span>
					<div
						style={{
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
						<Typography component="legend">{store.address}</Typography>
					</div>
				</div>
				<Button variant="outlined" sx={{ width: '80%' }} href={`${store.link}`}>
					카카오맵 링크
				</Button>
				{reviews && reviews?.length >= 1 ? (
					reviews.map((review: any) => {
						return <StoreReviewSection review={review} key={review.id} />;
					})
				) : (
					<h1>리뷰 없음</h1>
				)}
			</Box>
		</Box>
	);
};

export default DetailStoreSection;
