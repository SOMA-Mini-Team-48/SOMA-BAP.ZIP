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
export type Place = {
	address_name: string;
	category_group_code: string;
	category_group_name: string;
	category_name: string;
	distance: string;
	id: string;
	phone: string;
	place_name: string;
	place_url: string;
	road_address_name: string;
	x: string;
	y: string;
};
