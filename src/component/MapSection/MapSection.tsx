import React from 'react';
import { Container as MapDiv, NaverMap, Marker } from 'react-naver-maps';
import useFirebaseStoreData from '../../hooks/useFirebaseStoreData';

const SWMAESTRO_CENTER_COORDINATES = { lat: 37.50393, lng: 127.0448 };

const MapSection = () => {
	const { stores, isLoading } = useFirebaseStoreData();

	if (isLoading) {
		return <div>Loading...</div>;
	}
	return (
		<MapDiv style={{ height: '100%' }}>
			<NaverMap defaultCenter={SWMAESTRO_CENTER_COORDINATES}>
				{stores.map((store) => (
					<Marker
						key={store.id}
						defaultPosition={{
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
