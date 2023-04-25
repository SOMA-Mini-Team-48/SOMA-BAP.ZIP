import React from 'react';
import { Box, Typography, Button, Chip } from '@mui/material';
import { Menu } from '@mui/icons-material';
import { Store } from '../../types/stores';
import {
	ContentBox,
	CustomStar,
	DrawerBox,
} from './StoreBottomDrawerSection.style';
import { currentStoresState } from '../../store/store';
import { useRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { foodCategoryImgsrc, typeToKoreanArr } from '../../utils/markerIcons';

interface BottomSheetProps {
	isOpen: boolean;
	storeInfo: Store;
}

const StoreBottomDrawerSection: React.FC<BottomSheetProps> = ({
	isOpen,
	storeInfo,
}) => {
	const navigate = useNavigate();

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [currentGlobalStores, setCurrentGlobalStores] =
		useRecoilState(currentStoresState);
	const handleListButton = () => {
		navigate('/current-list', { state: { stores: currentGlobalStores } });
	};
	const handleStoreButton = (store: Store) => {
		navigate(`/store/${store.id}`, { state: { store } });
	};
	return (
		<Box
			sx={{
				position: 'absolute',
				bottom: 0,
				left: 0,
				width: '100%',
			}}
		>
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'end',
				}}
			>
				<Button
					variant="contained"
					sx={{ margin: 1 }}
					startIcon={<Menu />}
					onClick={handleListButton}
				>
					목록 {currentGlobalStores && currentGlobalStores.length}
				</Button>
			</Box>
			<DrawerBox
				sx={{
					transition: '0.3s ease-in-out',
					transform: isOpen ? 'translateY(0)' : 'translateY(100%)',
					height: isOpen ? '140px' : 0,
				}}
			>
				{storeInfo && (
					<ContentBox>
						<Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
							<img
								src={foodCategoryImgsrc[storeInfo.type]}
								alt="store"
								width="60px"
								height="60px"
							/>
							<Box>
								<Chip
									label={typeToKoreanArr[storeInfo.type]}
									size="small"
									sx={{
										mb: 1,
									}}
								/>
								<Typography
									variant="h6"
									sx={{
										fontWeight: '600',
										whiteSpace: 'nowrap',
										textOverflow: 'ellipsis',
									}}
									onClick={() => {
										handleStoreButton(storeInfo);
									}}
								>
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
										{storeInfo.totalRating?.toFixed(1)}&nbsp;
									</Typography>
									<Typography variant="body2" color="textSecondary">
										({storeInfo.reviewCount} 리뷰)
									</Typography>
								</Box>
							</Box>
						</Box>
					</ContentBox>
				)}
			</DrawerBox>
		</Box>
	);
};

export default StoreBottomDrawerSection;
