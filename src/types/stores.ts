type Lat = number;
type Lng = number;
export type Coordinates = [Lat, Lng];

export type Menu = { name: string; price: string };
export type Review = {
	id: string;
	username: string;
	content: string;
	rating: number;
	date: any;
};
export type Store = {
	id: string;
	name: string;
	description: string;
	coordinates: Coordinates;
	address: string;
	type: number;
	totalRating: number;
	link: string;
	reviewCount: number;
};
export type Bounds = {
	north: number;
	south: number;
	east: number;
	west: number;
} | null;
