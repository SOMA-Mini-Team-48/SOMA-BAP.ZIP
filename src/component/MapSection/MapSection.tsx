import React, { useEffect, useRef, useState } from 'react';
import {
	Container as MapDiv,
	NaverMap,
	Marker,
	useNavermaps,
} from 'react-naver-maps';
import { Bounds } from '../../types/stores';
import useCurrentStores from '../../hooks/useCurrentStore';
import { debounce } from '@mui/material';
import { useRecoilState } from 'recoil';
import { selectStoreState } from '../../store/store';

const SWMAESTRO_CENTER_COORDINATES = { lat: 37.50393, lng: 127.0448 };

const MapSection = () => {
	const [bounds, setBounds] = useState<Bounds>(null);
	const { stores, currentStores, isLoading } = useCurrentStores({ bounds });
	const [selectStore, setSelectStore] = useRecoilState<any>(selectStoreState);
	const navermaps = useNavermaps();
	const handleBoundsChanged = (bounds: any) => {
		if (!bounds) return;
		const { _ne, _sw } = bounds;
		setBounds({
			north: _ne._lat,
			south: _sw._lat,
			east: _ne._lng,
			west: _sw._lng,
		});
	};
	const debouncedHandleBoundsChanged = debounce(handleBoundsChanged, 100);

	const handleMarker = (store: any) => {
		setSelectStore(store);
	};

	const icon = {
		url: 'https://maps.google.com/mapfiles/kml/shapes/parking_lot_maps.png',
		size: new navermaps.Size(40, 40),
	};

	return (
		<MapDiv style={{ height: '100%' }}>
			<NaverMap
				defaultCenter={SWMAESTRO_CENTER_COORDINATES}
				onBoundsChanged={debouncedHandleBoundsChanged}
				center={SWMAESTRO_CENTER_COORDINATES}
			>
				{selectStore && (
					<Marker
						zIndex={100}
						icon={icon}
						position={{
							lat: selectStore.coordinates[0],
							lng: selectStore.coordinates[1],
						}}
					/>
				)}
				{!isLoading &&
					stores.map((store) => (
						<Marker
							key={store.id}
							zIndex={1}
							onClick={() => handleMarker(store)}
							position={{
								lat: store.coordinates[0],
								lng: store.coordinates[1],
							}}
						/>
					))}
			</NaverMap>
		</MapDiv>
	);
};

export default MapSection;
