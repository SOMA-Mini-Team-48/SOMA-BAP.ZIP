import styled from '@emotion/styled';
import { Box, Modal } from '@mui/material';

export const MainModal = styled(Modal)({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
});

export const BoxContainer = styled(Box)({
	backgroundColor: '#ffffff',
	boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.2)',
	padding: 32,
	maxWidth: 600,
	width: '90%',
});

export const ReviewForm = styled('div')({
	display: 'flex',
	flexDirection: 'column',
	gap: 16,
});

export const ReviewRating = styled('div')({
	display: 'flex',
	alignItems: 'center',
	gap: 8,
});
