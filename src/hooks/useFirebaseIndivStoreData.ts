import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../utils/firebase';
import { Review } from '../types/stores';

const useFirebaseIndivStoreData = (id: string | undefined) => {
	const [reviews, setReviews] = useState<Review | []>([]);
	const [isLoading, setIsLoading] = useState(true);
	useEffect(() => {
		const fetchReviews = async () => {
			const storesCollectionRef = collection(db, `stores/${id}/review`);
			const storeSnapshot = await getDocs(storesCollectionRef);
			const reviewData: Review[] = await Promise.all(
				storeSnapshot.docs.map(async (doc) => {
					return {
						id: doc.id,
						username: doc.data().username,
						content: doc.data().content,
						rating: doc.data().rating,
						date: new Date(
							doc.data().date.seconds * 1000 +
								doc.data().date.nanoseconds / 1000000
						),
					};
				})
			);
			setReviews(reviewData as Review | []);
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
