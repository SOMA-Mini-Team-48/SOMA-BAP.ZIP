import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Menu } from '@mui/icons-material';
import { Store } from '../../types/stores';
import {
	ContentBox,
	CustomStar,
	DrawerBox,
} from './StoreBottomDrawerSection.style';
import { currentStoresState } from '../../store/store';
import { useRecoilState } from 'recoil';

interface BottomSheetProps {
	isOpen: boolean;
	storeInfo: Store;
}

const StoreBottomDrawerSection: React.FC<BottomSheetProps> = ({
	isOpen,
	storeInfo,
}) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [currentGlobalStores, setCurrentGlobalStores] =
		useRecoilState(currentStoresState);

	return (
		<Box
			sx={{
				position: 'absolute',
				bottom: 0,
				left: 0,
				width: '100%',
			}}
		>
			<Button variant="contained" sx={{ margin: 1 }} startIcon={<Menu />}>
				목록 {currentGlobalStores && currentGlobalStores.length}
			</Button>
			<DrawerBox
				sx={{
					transition: '0.3s ease-in-out',
					transform: isOpen ? 'translateY(0)' : 'translateY(100%)',
					height: isOpen ? '130px' : 0,
				}}
			>
				{storeInfo && (
					<ContentBox>
						<Typography variant="h6" sx={{ fontWeight: '600' }}>
							{storeInfo.name}
						</Typography>
						<Typography variant="body2" gutterBottom color="text.secondary">
							{storeInfo.description}
						</Typography>

						<Box
							sx={{
								display: 'flex',
								alignItems: 'center',
								marginBottom: '16px',
							}}
						>
							<CustomStar />
							<Typography variant="body1">
								{storeInfo.totalRating.toFixed(1)}
							</Typography>
							<Typography variant="body2" color="textSecondary">
								({4} 리뷰)
							</Typography>
						</Box>
					</ContentBox>
				)}
			</DrawerBox>
		</Box>
	);
};

export default StoreBottomDrawerSection;
