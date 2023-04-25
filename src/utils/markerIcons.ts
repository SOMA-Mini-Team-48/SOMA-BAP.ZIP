export const unSelectedMarkerIcon = (type: number) => {
	const icon = [
		{
			url: process.env.PUBLIC_URL + '/unselected-marker-icons/한식.webp',
			size: new naver.maps.Size(40, 40),
		},
		{
			url: process.env.PUBLIC_URL + '/unselected-marker-icons/일식.webp',
			size: new naver.maps.Size(40, 40),
		},
		{
			url: process.env.PUBLIC_URL + '/unselected-marker-icons/중식.webp',

			size: new naver.maps.Size(40, 40),
		},
		{
			url: process.env.PUBLIC_URL + '/unselected-marker-icons/분식.webp',
			size: new naver.maps.Size(40, 40),
		},
		{
			url: process.env.PUBLIC_URL + '/unselected-marker-icons/양식.webp',
			size: new naver.maps.Size(40, 40),
		},
		{
			url: process.env.PUBLIC_URL + '/unselected-marker-icons/카페.webp',
			size: new naver.maps.Size(40, 40),
		},
		{
			url: process.env.PUBLIC_URL + '/unselected-marker-icons/패스트푸드.webp',
			size: new naver.maps.Size(40, 40),
		},
	];
	return icon[type];
};

const MARKER_WIDTH = 40;

export const selectedMarkerIcon = (type: number) => {
	const icon = [
		{
			url: process.env.PUBLIC_URL + '/selected-marker.png',
			size: new naver.maps.Size(40, 40),
			origin: new naver.maps.Point(MARKER_WIDTH * type, 0),
		},
		{
			url: process.env.PUBLIC_URL + '/selected-marker.png',
			size: new naver.maps.Size(40, 40),
			origin: new naver.maps.Point(MARKER_WIDTH * type, 0),
		},
		{
			url: process.env.PUBLIC_URL + '/selected-marker.png',
			size: new naver.maps.Size(40, 40),
			origin: new naver.maps.Point(MARKER_WIDTH * type, 0),
		},
		{
			url: process.env.PUBLIC_URL + '/selected-marker.png',
			size: new naver.maps.Size(40, 40),
			origin: new naver.maps.Point(MARKER_WIDTH * type, 0),
		},
		{
			url: process.env.PUBLIC_URL + '/selected-marker.png',
			size: new naver.maps.Size(40, 40),
			origin: new naver.maps.Point(MARKER_WIDTH * type, 0),
		},
		{
			url: process.env.PUBLIC_URL + '/selected-marker.png',
			size: new naver.maps.Size(40, 40),
			origin: new naver.maps.Point(MARKER_WIDTH * type, 0),
		},
		{
			url: process.env.PUBLIC_URL + '/selected-marker.png',
			size: new naver.maps.Size(40, 40),
			origin: new naver.maps.Point(MARKER_WIDTH * type, 0),
		},
	];
	return icon[type];
};

export const typeToKoreanArr = [
	'한식',
	'일식',
	'중식',
	'분식',
	'양식',
	'카페',
	'패스트푸드',
];

export const foodCategoryImgsrc = [
	process.env.PUBLIC_URL + 'food-category/한식.webp',
	process.env.PUBLIC_URL + 'food-category/일식.webp',
	process.env.PUBLIC_URL + 'food-category/중식.webp',
	process.env.PUBLIC_URL + 'food-category/분식.webp',
	process.env.PUBLIC_URL + 'food-category/양식.webp',
	process.env.PUBLIC_URL + 'food-category/카페.webp',
	process.env.PUBLIC_URL + 'food-category/패스트푸드.webp',
];
