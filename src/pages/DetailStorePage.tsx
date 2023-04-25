import React from 'react';
import { useLocation } from 'react-router-dom';
import useFirebaseIndivStoreData from '../hooks/useFirebaseIndivStoreData';
import { Box } from '@mui/material';
import Loading from '../component/Loading';
import DetailStoreSection from '../component/DetailStoreSection';

import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import StarIcon from '@mui/icons-material/Star';

const DetailStorePage = () => {
	const location = useLocation();
	const indivStore = location.state?.store ?? null;
	const { reviews, isLoading } = useFirebaseIndivStoreData(indivStore.id);

	console.log(indivStore);
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
	return (
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
					{indivStore.name}
				</h1>
				<span
					style={{
						fontSize: '0.9em',
						display: 'block',
						paddingBottom: '7px',
					}}
				>
					{indivStore.description}
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
							value={indivStore.totalRating}
							readOnly
							precision={0.5}
							emptyIcon={
								<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
							}
						/>
						<Box sx={{ ml: 0.3 }}>({indivStore.reviewCount})</Box>
					</Box>
					<Typography component="legend">{indivStore.address}</Typography>
				</div>
			</div>
			<Button
				variant="outlined"
				sx={{ width: '80%' }}
				href={`${indivStore.link}`}
			>
				카카오맵 링크
			</Button>
		</Box>
	);
};

export default DetailStorePage;
