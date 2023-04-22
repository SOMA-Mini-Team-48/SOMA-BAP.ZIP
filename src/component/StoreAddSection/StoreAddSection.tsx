import React from 'react';
import { useEffect, useState } from 'react';
import { BoxContainer, ReviewForm } from './StoreAddSection.styles';
import {
	Button,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	TextField,
	Typography,
} from '@mui/material';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../utils/firebase';
import KakaoSearchModal from '../KakaoSearchModal/KakaoSearchModal';
import { Place } from '../../types/stores';
import { useNavigate } from 'react-router-dom';

const StoreAddSection = () => {
	const navigate = useNavigate();
	const [modalOpen, setModalOpen] = useState(false);

	//TO-DO state 객체로 변환
	const [name, setName] = useState('');
	const [description, setDescription] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const [type, setType] = useState<number>(0);
	const [placeSpec, setPlaceSpec] = useState<Place>();
	const [placeName, setPlaceName] = useState('');

	useEffect(() => {
		if (placeSpec) {
			setPlaceName(placeSpec.place_name);
		}
	}, [placeSpec]);
	const handleSubmit = async () => {
		setIsLoading(true);
		if (!name || !description || type == undefined || !placeSpec) {
			alert('모든 항목을 입력해주세요.');
			setIsLoading(false);
			return;
		}
		const store = {
			name: placeSpec.place_name,
			type,
			description,
			address: placeSpec.address_name,
			coordinates: [parseFloat(placeSpec.y), parseFloat(placeSpec.x)],
			link: placeSpec.place_url,
			reviewCount: 0,
			totalRating: 0,
		};
		try {
			await addDoc(collection(db, `stores`), {
				...store,
			});
			setIsLoading(false);
			navigate('/', { replace: true });
		} catch (error) {
			console.error('매장 추가중 에러: ', error);
			setIsLoading(false);
			alert('매장 추가중 에러가 발생했습니다.');
		}
	};

	return (
		<BoxContainer>
			<Typography
				variant="h5"
				id="review-modal-title"
				sx={{ mb: 2, fontWeight: 700 }}
			>
				맛집 등록하기
			</Typography>
			<ReviewForm>
				<TextField
					label="매장 명"
					variant="outlined"
					value={name}
					onChange={(e) => setName(e.target.value)}
					required
				/>
				<TextField
					label="한줄 설명"
					variant="outlined"
					value={description}
					onChange={(e) => setDescription(e.target.value)}
					required
				/>
				<FormControl fullWidth>
					<InputLabel id="select-label">분야</InputLabel>
					<Select
						labelId="select-label"
						id="select"
						value={type}
						label="분야"
						onChange={(e) => setType(parseInt(e.target.value.toString()))}
						required
					>
						<MenuItem value={0}>한식</MenuItem>
						<MenuItem value={1}>일식</MenuItem>
						<MenuItem value={2}>중식</MenuItem>
						<MenuItem value={3}>분식</MenuItem>
						<MenuItem value={4}>양식</MenuItem>
						<MenuItem value={5}>커피</MenuItem>
						<MenuItem value={6}>패스트푸드</MenuItem>
					</Select>
				</FormControl>
				<TextField
					label="위치"
					fullWidth
					onClick={() => {
						setModalOpen(true);
					}}
					value={placeName}
					disabled
				/>
				<KakaoSearchModal
					open={modalOpen}
					onClose={() => {
						setModalOpen(false);
					}}
					setPlaceSpec={setPlaceSpec}
				/>
				<Button
					onClick={handleSubmit}
					variant="contained"
					color="primary"
					disabled={isLoading}
				>
					등록
				</Button>
				<Button
					variant="outlined"
					color="primary"
					onClick={() => {
						navigate('/', { replace: true });
					}}
				>
					취소
				</Button>
			</ReviewForm>
		</BoxContainer>
	);
};

export default StoreAddSection;
