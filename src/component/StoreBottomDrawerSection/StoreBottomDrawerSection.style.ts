import styled from '@emotion/styled';
import { Star } from '@mui/icons-material';
import { Box, IconButton } from '@mui/material';

export const DrawerBox = styled(Box)(() => ({
	position: 'relative',
	bottom: 0,
	left: 0,
	width: '100%',
	backgroundColor: '#ffffff',
	borderTopRightRadius: '16px',
	borderTopLeftRadius: '16px',
	overflow: 'hidden',
}));

export const ContentBox = styled(Box)`
	padding: 16px;
`;

export const CustomStar = styled(Star)`
	color: #1976d2;
	margin-right: 8px;
`;

export const ListButton = styled(IconButton)`
	position: 'absolute';
	right: '16px';
	top: '-20px';
`;
