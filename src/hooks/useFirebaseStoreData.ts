import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { Store } from '../types/stores';
import { db } from '../utils/firebase';

const useFirebaseStoreData = () => {
	const [stores, setStores] = useState<Store[] | []>([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchStores = async () => {
			const storesCollectionRef = collection(db, 'stores');
			const storeSnapshot = await getDocs(storesCollectionRef);

			const storesData: Store[] = await Promise.all(
				storeSnapshot.docs.map(async (doc) => {
					// let totalRating = 0;
					// const reviewCollectionRef = collection(doc.ref, 'review');
					// const reviewSnapshot = await getDocs(reviewCollectionRef);
					// const reviews: Review[] = reviewSnapshot.docs.map((doc) => {
					// 	const timestamp = doc.data().date;
					// 	const date = new Date(
					// 		timestamp.seconds * 1000 + timestamp.nanoseconds / 1000000
					// 	);
					// 	const reviewRating = doc.data().rating;
					// 	totalRating += reviewRating;
					// 	return {
					// 		id: doc.id,
					// 		username: doc.data().username,
					// 		date: date.toString(),
					// 		content: doc.data().content,
					// 		rating: reviewRating,
					// 	};
					// });

					return {
						id: doc.id,
						description: doc.data().description,
						name: doc.data().name,
						address: doc.data().address,
						coordinates: doc.data().coordinates,
						link: doc.data().link,
						type: doc.data().type,
						totalRating: 5,
					};
				})
			);

			setStores(storesData);
			setIsLoading(false);
		};

		fetchStores();
	}, []);

	return { stores, isLoading };
};

export default useFirebaseStoreData;
