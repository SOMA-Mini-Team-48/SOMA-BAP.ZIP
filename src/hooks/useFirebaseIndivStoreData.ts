import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../utils/firebase';

const useFirebaseIndivStoreData = (id: string | undefined) => {
	const [reviews, setReviews] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	useEffect(() => {
		const fetchReviews = async () => {
			const storesCollectionRef = collection(db, `stores/${id}/review`);
			const storeSnapshot = await getDocs(storesCollectionRef);
			const reviewData: any = [];
			storeSnapshot.forEach((doc) => {
				reviewData.push(doc.data());
			});
			setReviews(reviewData);
			setIsLoading(false);
		};
		if (id) {
			fetchReviews();
		}
	}, [id]);

	if (!id) return { reviews, isLoading };

	return { reviews, isLoading };
};

export default useFirebaseIndivStoreData;
