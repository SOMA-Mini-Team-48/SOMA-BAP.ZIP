import React, { useState } from 'react';
import { Container as MapDiv, NaverMap, Marker } from 'react-naver-maps';
import { Bounds, Store } from '../../types/stores';
import useCurrentStores from '../../hooks/useCurrentStore';
import { debounce } from '@mui/material';
import StoreBottomDrawerSection from '../StoreBottomDrawerSection';
import Loading from '../Loading';
import {
	selectedMarkerIcon,
	unSelectedMarkerIcon,
} from '../../utils/markerIcons';

const SWMAESTRO_CENTER_COORDINATES = { lat: 37.50393, lng: 127.0448 };

const MapSection = () => {
	const [bounds, setBounds] = useState<Bounds>(null);
	const [selectStore, setSelectStore] = useState(null as Store | null);
	const [drawerOpen, setDrawerOpen] = useState(false);
	const { currentGlobalStores, isLoading, mapRef } = useCurrentStores({
		bounds,
	});

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
		if (selectStore) {
			setSelectStore(null);
		}
		setSelectStore(store);
		setDrawerOpen(true);
	};

	const dismissMarker = () => {
		setSelectStore(null);
		setDrawerOpen(false);
	};

	return (
		<MapDiv
			style={{
				height: '100%',
				display: 'flex',
				justifyContent: 'center',
				flexDirection: 'column',
				alignItems: 'center',
			}}
		>
			<NaverMap
				defaultCenter={SWMAESTRO_CENTER_COORDINATES}
				onBoundsChanged={debouncedHandleBoundsChanged}
				center={SWMAESTRO_CENTER_COORDINATES}
				ref={mapRef}
			>
				{selectStore && (
					<>
						<Marker
							zIndex={100}
							icon={selectedMarkerIcon(selectStore.type)}
							onClick={dismissMarker}
							position={{
								lat: selectStore.coordinates[0],
								lng: selectStore.coordinates[1],
							}}
						/>
					</>
				)}
				<StoreBottomDrawerSection
					isOpen={drawerOpen}
					storeInfo={selectStore as Store}
				/>
				{isLoading ? (
					<Loading></Loading>
				) : (
					currentGlobalStores &&
					currentGlobalStores.map((store) => (
						<Marker
							key={store.id}
							zIndex={1}
							icon={unSelectedMarkerIcon(store.type)}
							onClick={() => handleMarker(store)}
							position={{
								lat: store.coordinates[0],
								lng: store.coordinates[1],
							}}
						/>
					))
				)}
			</NaverMap>
		</MapDiv>
	);
};

export default MapSection;
