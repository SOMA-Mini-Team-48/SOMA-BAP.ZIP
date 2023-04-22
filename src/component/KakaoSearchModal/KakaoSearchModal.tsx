import React from 'react';
import { SetStateAction, useState } from 'react';
import { BoxContainer, MainModal } from './KakaoSearchModal.styles';
import {
	Box,
	List,
	ListItemButton,
	ListItemText,
	TextField,
	Typography,
	debounce,
} from '@mui/material';
import { getSearchPlaces } from '../../api/getSearchPlaces';
import { Place } from '../../types/stores';

type Props = {
	open: boolean;
	onClose: () => void;
	setPlaceSpec: (place: Place) => void;
};

const KakaoSearchModal = ({ open, onClose, setPlaceSpec }: Props) => {
	const [places, setPlaces] = useState([]);
	const [placeName, setPlaceName] = useState('');
	const handleSearch = async (query: string) => {
		if (query.length < 2) {
			setPlaces([]);
			return;
		}
		const results = await getSearchPlaces(query);
		setPlaces(results);
	};
	const debouncedSearch = debounce(handleSearch, 1000);
	const changeTextField = (e: {
		target: { value: SetStateAction<string> };
	}) => {
		setPlaceName(e.target.value.toString());
		debouncedSearch(e.target.value.toString());
	};

	const handleListItemClick = (value: Place) => {
		setPlaceSpec(value);
		setPlaces([]);
		onClose();
	};

	return (
		<MainModal
			open={open}
			onClose={() => {
				onClose();
				setPlaces([]);
			}}
			aria-labelledby="review-modal-title"
			aria-describedby="review-modal-description"
		>
			<BoxContainer>
				<Typography variant="h6" id="review-modal-title" sx={{ mb: 2 }}>
					위치 검색
				</Typography>
				<TextField
					label="검색"
					fullWidth
					onChange={changeTextField}
					sx={{ mb: 1.5 }}
				/>

				{placeName.length > 1 ? (
					places.length > 0 && (
						<List sx={{ maxHeight: '70%', overflow: 'scroll' }}>
							{places.map((place: Place) => (
								<ListItemButton
									key={place.id}
									onClick={() => {
										handleListItemClick(place);
									}}
								>
									<ListItemText
										primary={place.place_name}
										secondary={place.address_name}
									/>
								</ListItemButton>
							))}
						</List>
					)
				) : (
					<Box
						sx={{
							height: '100%',
							display: 'flex',
							justifyContent: 'center',
						}}
					>
						<Typography variant="body2" sx={{ mt: 1 }}>
							검색 결과를 보시려면 2글자 이상 입력해주세요.
						</Typography>
					</Box>
				)}
			</BoxContainer>
		</MainModal>
	);
};

export default KakaoSearchModal;
