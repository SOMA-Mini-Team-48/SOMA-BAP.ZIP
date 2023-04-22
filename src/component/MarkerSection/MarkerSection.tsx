import React from 'react';
import { Overlay, useMap, useNavermaps } from 'react-naver-maps';
import { makeMarkerClustering } from '../../utils/makeMarkerClustring';
import { useState } from 'react';
import { Store } from '../../types/stores';

type Props = {
	stores: Store[] | null;
};

const MarkerSection = ({ stores }: Props) => {
	//TO-DO 마커 섹션 나중에 구현
	const navermaps = useNavermaps();
	const map = useMap();
	const MarkerClustering = makeMarkerClustering(window.naver);

	const htmlMarker1 = {
		content:
			'<div style="cursor:pointer;width:40px;height:40px;line-height:42px;font-size:10px;color:white;text-align:center;font-weight:bold;background:url(https://navermaps.github.io/maps.js.ncp/docs/img/cluster-marker-1.png);background-size:contain;"></div>',
		size: new navermaps.Size(40, 40),
		anchor: new navermaps.Point(20, 20),
	};
	const htmlMarker2 = {
		content:
			'<div style="cursor:pointer;width:40px;height:40px;line-height:42px;font-size:10px;color:white;text-align:center;font-weight:bold;background:url(https://navermaps.github.io/maps.js.ncp/docs/img/cluster-marker-2.png);background-size:contain;"></div>',
		size: new navermaps.Size(40, 40),
		anchor: new navermaps.Point(20, 20),
	};
	const htmlMarker3 = {
		content:
			'<div style="cursor:pointer;width:40px;height:40px;line-height:42px;font-size:10px;color:white;text-align:center;font-weight:bold;background:url(https://navermaps.github.io/maps.js.ncp/docs/img/cluster-marker-3.png);background-size:contain;"></div>',
		size: new navermaps.Size(40, 40),
		anchor: new navermaps.Point(20, 20),
	};

	const [cluster] = useState(() => {
		const markers = [];
		if (!stores) return;
		for (let i = 0, ii = stores.length; i < ii; i++) {
			const spot = stores[i].coordinates,
				latlng = new naver.maps.LatLng(spot[0], spot[1]),
				marker = new naver.maps.Marker({
					position: latlng,
				});
			marker.addListener('click', () => {
				console.log(1);
			});

			markers.push(marker);
		}

		const cluster = new MarkerClustering({
			minClusterSize: 2,
			maxZoom: 12,
			map: map,
			markers: markers,
			disableClickZoom: false,
			gridSize: 120,
			icons: [htmlMarker1, htmlMarker2],
			indexGenerator: [10, 100],
			stylingFunction: function (clusterMarker: any, count: any) {
				clusterMarker.getElement().querySelector('div:first-child').innerText =
					count;
			},
		});

		return cluster;
	});

	return <Overlay element={cluster as any} />;
};

export default MarkerSection;
