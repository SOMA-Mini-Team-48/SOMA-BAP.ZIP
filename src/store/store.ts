import { atom } from 'recoil';
import { Store } from '../types/stores';

export const currentStoresState = atom<Store[] | null>({
	key: 'currentStoresState',
	default: null,
});

export const allStoresState = atom<Store[] | null>({
	key: 'allStoresState',
	default: null,
});

export const searchModalState = atom<boolean>({
	key: 'searchModalState',
	default: false,
});
