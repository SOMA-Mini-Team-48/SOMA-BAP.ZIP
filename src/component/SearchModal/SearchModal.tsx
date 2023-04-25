import React from 'react';
import TextField from '@mui/material/TextField';
import {
	Autocomplete,
	Box,
	Button,
	Divider,
	Modal,
	Typography,
} from '@mui/material';
import { allStoresState, searchModalState } from '../../store/store';
import { useRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { Store } from '../../types/stores';

const SearchModal = () => {
	const navigate = useNavigate();
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [globalStores, setGlobalStores] = useRecoilState(allStoresState);

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [searchModalOpen, setSearchModalOpen] =
		useRecoilState(searchModalState);
	const handleClose = () => {
		setSearchModalOpen(false);
	};
	const handleStoreClick = (store: Store) => {
		navigate(`/store/${store.id}`, { replace: true });
		setSearchModalOpen(false);
	};

	if (!globalStores) return <></>;
	return (
		<Modal
			open={searchModalOpen}
			onClose={handleClose}
			aria-labelledby="search-modal"
			aria-describedby="search-for-items"
		>
			<div>
				<Autocomplete
					sx={{
						maxWidth: '600px',
						width: '100%',
						top: '25%',
						left: '50%',
						transform: 'translate(-50%, -50%)',
						position: 'absolute',
						paddingX: 2,
					}}
					openText=""
					noOptionsText="검색 결과가 없습니다."
					options={globalStores}
					getOptionLabel={(option) => option.name}
					renderInput={(params) => (
						<TextField
							{...params}
							variant="outlined"
							sx={{
								background: '#fff',
							}}
						/>
					)}
					renderOption={(props, option) => (
						<Box key={option.id}>
							<Button
								sx={{ color: 'black', width: '100%', textAlign: 'left' }}
								onClick={() => {
									handleStoreClick(option);
								}}
							>
								<Typography variant="body1" py={0.5} px={1}>
									{option.name}
								</Typography>
								<Divider />
							</Button>
						</Box>
					)}
				/>
			</div>
		</Modal>
	);
};

export default SearchModal;
