import { atom } from 'recoil';
import { Store } from '../types/stores';

export const currentStoresState = atom<Store[] | null>({
	key: 'currentStoresState',
	default: null,
});
