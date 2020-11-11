import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs';
import {HotelOffers} from '../models/hotel.model';

@Injectable()
export class AuthService {
	public currentUserObject = new BehaviorSubject('');
	public currentUser = this.currentUserObject.asObservable();
	public searchForPlace = new BehaviorSubject(null);
	constructor(public http: HttpClient) {
	}
	public get currentUserData() {
		return this.currentUserObject;
	}

	retrieveToken() {

		const token = localStorage.getItem('token');
		if (!token) {
			const params = new URLSearchParams();
			params.append('grant_type', 'client_credentials');
			params.append('client_id', 'OzoR4Jtb72IqOLo5GaFHm8iaysjkcBv8');
			params.append('client_secret', 'Gj5WYVxiEAfN6e5e');

			const headers =
				new HttpHeaders({'Content-type': 'application/x-www-form-urlencoded; charset=utf-8'});

			this.http.post('https://test.api.amadeus.com/v1/security/oauth2/token',
				params.toString(), {headers: headers})
				.subscribe(
					data => {
						localStorage.setItem('token', data['access_token']);
						this.currentUserObject.next(data['access_token']);
					});
		} else {
			this.currentUserObject.next(token);
		}
	}

	getData(id) {
		let cityCode = id ? id : this.searchForPlace['_value'];
		// return this.http.get<HotelOffers>('https://test.api.amadeus.com/v2/shopping/hotel-offers?cityCode=' + cityCode)
		return {
			data: [
				{
					hotelId: 1,
					address: 'Fiołkowa 12',
					cityCode: "WAW",
					contact: {
						phone: '+48 616223098'
					},
					name: "INTERNATIONAL WARSZAWA",
					rating: 5,
					avgPrice: '100 zl',
					img: './assets/hotel.jpg',
					offers: [
						{
							type: 1,
							name: 'Pojedynczy pokój',
							price: '50 zl'
						},
						{
							type: 1,
							name: 'Pojedynczy pokój',
							price: '60 zl'
						},
						{
							type: 2,
							name: 'Pojedynczy pokój',
							price: '120 zl'
						},
					]
				},
				{
					hotelId: 2,
					address: 'Fieldorfa 20',
					cityCode: "WAW",
					contact: {
						phone: '+48 616223098'
					},
					name: "INTERNATIONAL WARSZAWA",
					rating: 2,
					avgPrice: '300 zl',
					img: './assets/hotel2.jpg',
					offers: [
						{
							type: 1,
							name: 'Pojedynczy pokój',
							price: '50 zl'
						},
						{
							type: 1,
							name: 'Pojedynczy pokój',
							price: '60 zl'
						},
						{
							type: 2,
							name: 'Pojedynczy pokój',
							price: '120 zl'
						},
					]
				},
				{
					hotelId: 3,
					address: 'Kolorwa 1',
					cityCode: "WAW",
					contact: {
						phone: '+48 616223098'
					},
					name: "INTERNATIONAL WARSZAWA",
					rating: 4,
					avgPrice: '200 zl',
					img: './assets/hotel3.jpg',
					offers: [
						{
							type: 1,
							name: 'Pojedynczy pokój',
							price: '50 zl'
						},
						{
							type: 1,
							name: 'Pojedynczy pokój',
							price: '60 zl'
						},
						{
							type: 2,
							name: 'Pojedynczy pokój',
							price: '120 zl'
						},
					]
				}
			]
		}
	}

}
