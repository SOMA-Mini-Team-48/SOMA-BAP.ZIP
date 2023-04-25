import React, { useState } from 'react';
import {
	BoxContainer,
	MainModal,
	ReviewForm,
	ReviewRating,
} from './ReviewWriteModal.styles';
import { Button, Rating, TextField, Typography } from '@mui/material';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../../utils/firebase';
type Props = {
	open: boolean;
	onClose: () => void;
	storeName: string;
	storeId: string;
};

const ReviewWriteModal = ({ open, onClose, storeName, storeId }: Props) => {
	const [username, setUsername] = useState('');
	const [content, setContent] = useState('');
	const [rating, setRating] = useState<number | null>(null);
	const [isLoading, setIsLoading] = useState(false);

	const handleSubmit = async () => {
		setIsLoading(true);
		if (!username || !content || !rating) {
			alert('모든 항목을 입력해주세요.');
			setIsLoading(false);
			return;
		}
		try {
			await addDoc(collection(db, `stores/${storeId}/review`), {
				username,
				content,
				rating,
				date: serverTimestamp(),
			});
			setIsLoading(false);
		} catch (error) {
			console.error('리뷰 추가중 에러: ', error);
			setIsLoading(false);
			alert('리뷰 추가중 에러가 발생했습니다.');
		}
		onClose();
	};

	return (
		<MainModal
			open={open}
			onClose={onClose}
			aria-labelledby="review-modal-title"
			aria-describedby="review-modal-description"
		>
			<BoxContainer>
				<Typography variant="h5" id="review-modal-title" sx={{ mb: 2 }}>
					{storeName} 가게 리뷰 작성하기
				</Typography>
				<ReviewForm>
					<TextField
						label="이름"
						variant="outlined"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						required
					/>
					<TextField
						label="리뷰"
						variant="outlined"
						value={content}
						onChange={(e) => setContent(e.target.value)}
						required
						multiline
						rows={4}
					/>
					<ReviewRating>
						<Typography variant="subtitle1">별점:</Typography>
						<Rating
							name="rating"
							value={rating}
							onChange={(e, value) => setRating(value)}
						/>
					</ReviewRating>
					<Typography variant="body2" id="review-modal-description">
						장난 리뷰는 절대 금지! 불쾌한 리뷰는 삭제될 수 있습니다.
					</Typography>
					<Button
						onClick={handleSubmit}
						variant="contained"
						color="primary"
						disabled={isLoading}
					>
						등록
					</Button>
				</ReviewForm>
			</BoxContainer>
		</MainModal>
	);
};

export default ReviewWriteModal;
