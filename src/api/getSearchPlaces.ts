import axios from 'axios';

const API_ENDPOINT = 'https://dapi.kakao.com/v2/local/search/keyword.json';

export const getSearchPlaces = async (query: string) => {
	try {
		const response = await axios.get(API_ENDPOINT, {
			params: { query },
			headers: {
				Authorization: `KakaoAK ${process.env.REACT_APP_KAKAO_REST_API_KEY}`,
			},
		});
		return response.data.documents;
	} catch (error) {
		console.error(error);
		return [];
	}
};
