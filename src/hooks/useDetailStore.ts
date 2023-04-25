import { doc, getDoc } from 'firebase/firestore';
import { useState, useEffect } from 'react';
import { db } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';

const useDetailStore = (storeId: string | undefined) => {
	const [store, setStore] = useState<any | null>(null);
	const [isLoading, setIsLoading] = useState(true);
	const navigate = useNavigate();

	useEffect(() => {
		if (!storeId) return;
		const fetchStore = async () => {
			try {
				const storeRef = doc(db, 'stores', storeId);
				const storeDoc = await getDoc(storeRef);
				if (storeDoc.exists()) {
					setStore({ id: storeDoc.id, ...storeDoc.data() });
				} else {
					alert('잘못된 접근입니다.');
					navigate('/', { replace: true });
				}
			} catch (error) {
				alert('문제가 발생했습니다. 다시 시도해주세요.');
				navigate('/', { replace: true });
			} finally {
				setIsLoading(false);
			}
		};

		fetchStore();
	}, []);

	return { store, isLoading };
};

export default useDetailStore;
