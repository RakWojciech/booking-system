export class HotelOffers {
	type: string;
	hotel: Hotel;
	available: boolean;
	offers: Offers;
}
export class Hotel {
	address: Address;
	chainCode: string;
	cityCode: string;
	contact: HotelContact
	description: HotelDescription
	dupeId: string;
	hotelDistance: hotelDistance
	hotelId: string;
	latitude: number;
	longitude: number;
	media: HotelMedia;
	name: string;
	rating: string;
	type: string;
}
export class HotelDescription {
	lang: string;
	text: string;
}
export class hotelDistance {
	distance: number;
	distanceUnit: string;
}
export class HotelContact {fax: string; phone: string;}
export class HotelMedia {
	category: string;
	uri: string;
}
export class Address {
	cityName: string;
	countryCode: string;
	lines: string
	postalCode: string;
}

export class Offers {
	checkInDate: Date;
	checkOutDate: Date;
	id: string;
	price: OffersPrice

}

export class OffersPrice {currency: string; total: string;}
