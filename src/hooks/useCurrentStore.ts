import { useEffect, useRef } from 'react';
import useFirebaseStoreData from './useFirebaseStoreData';
import { Bounds, Store } from '../types/stores';
import { useRecoilState } from 'recoil';
import { currentStoresState } from '../store/store';

type Props = {
	bounds: any;
};

const useCurrentStores = ({ bounds }: Props) => {
	const { stores, isLoading } = useFirebaseStoreData();
	const [currentGlobalStores, setCurrentGlobalStores] =
		useRecoilState(currentStoresState);
	const mapRef = useRef<any>(null);
	const convertBounds = (mapRef: any) => {
		if (!mapRef.current?.bounds) return;
		const { _ne, _sw } = mapRef.current?.bounds;
		filterCurrentStores({
			north: _ne._lat,
			south: _sw._lat,
			east: _ne._lng,
			west: _sw._lng,
		});
	};

	const filterCurrentStores = (bounds: Bounds) => {
		try {
			if (!bounds) return;
			const filteredStores = stores.filter((store: Store) => {
				const [latitude, longitude] = store.coordinates;
				if (latitude > bounds.north || latitude < bounds.south) return false;
				if (longitude > bounds.east || longitude < bounds.west) return false;
				return true;
			});
			setCurrentGlobalStores(filteredStores);
		} catch (e) {
			setCurrentGlobalStores([]);
		}
	};

	useEffect(() => {
		convertBounds(mapRef);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [mapRef, stores, bounds]);

	return { currentGlobalStores, isLoading, mapRef };
};

export default useCurrentStores;
