import { Box, Button } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
const ErrorPage = () => {
	const navigate = useNavigate();
	const handleToMainButton = () => {
		navigate('/', { replace: true });
	};
	return (
		<Box sx={{ height: '100%', bgcolor: '#fff', textAlign: 'center' }}>
			<h2>페이지가 존재하지 않거나, 문제가 발생했습니다.</h2>
			<Button
				onClick={() => {
					handleToMainButton();
				}}
			>
				메인 화면으로 돌아가기
			</Button>
		</Box>
	);
};

export default ErrorPage;
