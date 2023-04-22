import styled from '@emotion/styled';
import { Box } from '@mui/material';

export const MainConatiner = styled(Box)({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	width: '100%',
});

export const BoxContainer = styled(Box)({
	backgroundColor: '#ffffff',
	boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.2)',
	padding: '32px',
	alignItems: 'center',
	width: '100%',
	height: '100%',
});

export const ReviewForm = styled('div')({
	display: 'flex',
	flexDirection: 'column',
	gap: '16px',
});
