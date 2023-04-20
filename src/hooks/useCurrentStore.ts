import { useEffect, useState } from 'react';
import useFirebaseStoreData from './useFirebaseStoreData';
import { Bounds, Store } from '../types/stores';
interface UseCurrentStoresProps {
	bounds: Bounds;
}

const useCurrentStores = ({ bounds }: UseCurrentStoresProps) => {
	const { stores, isLoading } = useFirebaseStoreData();
	const [currentStores, setCurrentStores] = useState<Store[]>([]);

	const filterCurrentStores = () => {
		if (!bounds) return;
		const filteredStores = stores.filter((store: Store) => {
			const [latitude, longitude] = store.coordinates;
			if (latitude > bounds.north || latitude < bounds.south) return false;
			if (longitude > bounds.east || longitude < bounds.west) return false;
			return true;
		});
		setCurrentStores(filteredStores);
	};

	useEffect(() => {
		filterCurrentStores();
	}, [bounds, stores]);

	return { stores, currentStores, isLoading };
};

export default useCurrentStores;
