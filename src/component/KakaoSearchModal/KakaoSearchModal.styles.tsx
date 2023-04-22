import { Box, Modal } from '@mui/material';
import styled from '@emotion/styled';

export const MainModal = styled(Modal)({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
});

export const BoxContainer = styled(Box)({
	backgroundColor: '#ffffff',
	boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.2)',
	padding: '32px',
	maxWidth: '600px',
	height: '60%',
	width: '90%',
});
