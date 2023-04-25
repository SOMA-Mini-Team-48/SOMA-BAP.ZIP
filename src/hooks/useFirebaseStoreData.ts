import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { Store } from '../types/stores';
import { db } from '../utils/firebase';
import { useRecoilState } from 'recoil';
import { allStoresState } from '../store/store';

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

	return { stores, isLoading };
};

export default useFirebaseStoreData;
