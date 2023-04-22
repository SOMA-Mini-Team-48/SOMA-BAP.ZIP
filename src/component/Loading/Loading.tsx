import React from 'react';
import Lottie from 'lottie-react';
import loadingjson from '../../assets/loading.json';
import { Box } from '@mui/material';

const Loading = () => {
	return (
		<Box
			sx={{
				width: '130px',
			}}
		>
			<Lottie animationData={loadingjson} size={10} />
		</Box>
	);
};

export default Loading;
