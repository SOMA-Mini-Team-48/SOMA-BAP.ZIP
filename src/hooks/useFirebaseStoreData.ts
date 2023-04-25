import { useEffect, useLayoutEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { Store } from '../types/stores';
import { db } from '../utils/firebase';
import { useRecoilState } from 'recoil';
import { allStoresState } from '../store/store';

const fooCategoryImageIcons = [
	process.env.PUBLIC_URL + '/food-category/한식.webp',
	process.env.PUBLIC_URL + '/food-category/일식.webp',
	process.env.PUBLIC_URL + '/food-category/중식.webp',
	process.env.PUBLIC_URL + '/food-category/분식.webp',
	process.env.PUBLIC_URL + '/food-category/양식.webp',
	process.env.PUBLIC_URL + '/food-category/카페.webp',
	process.env.PUBLIC_URL + '/food-category/패스트푸드.webp',
];

const useFirebaseStoreData = () => {
	const [stores, setStores] = useState<Store[] | []>([]);
	const [isLoading, setIsLoading] = useState(true);
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [globalStores, setGlobalStores] = useRecoilState(allStoresState);
	useEffect(() => {
		const fetchStores = async () => {
			const storesCollectionRef = collection(db, 'stores');
			const storeSnapshot = await getDocs(storesCollectionRef);

			const storesData: Store[] = await Promise.all(
				storeSnapshot.docs.map(async (doc) => {
					return {
						id: doc.id,
						description: doc.data().description,
						name: doc.data().name,
						address: doc.data().address,
						coordinates: doc.data().coordinates,
						link: doc.data().link,
						type: doc.data().type,
						totalRating: doc.data().totalRating,
						reviewCount: doc.data().reviewCount,
					};
				})
			);

			setStores(storesData);
			setGlobalStores(storesData);
			setIsLoading(false);
		};

		fetchStores();
	}, []);
	useLayoutEffect(() => {
		for (let i = 0; i < fooCategoryImageIcons.length; i++) {
			const img = new Image();
			img.src = fooCategoryImageIcons[i];
		}
	}, []);

	return { stores, isLoading };
};

export default useFirebaseStoreData;
