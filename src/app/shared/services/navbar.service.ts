import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BehaviorSubject} from "rxjs";
import {HotelOffers} from "../models/hotel.model";

@Injectable()
export class NavbarService {
	visible: boolean;
	public currentUserObject = new BehaviorSubject('');
	public currentUser = this.currentUserObject.asObservable();
	public searchForPlace = new BehaviorSubject(null);
	constructor(public http: HttpClient) { this.visible = false; }
	public get currentUserData() {
		return this.currentUserObject;
	}
	hide() { this.visible = false; }

	show() { this.visible = true; }

	toggle() { this.visible = !this.visible; }

	retrieveToken() {

		let token = localStorage.getItem('token');
		if(!token) {
			let params = new URLSearchParams();
			params.append('grant_type', 'client_credentials');
			params.append('client_id', 'OzoR4Jtb72IqOLo5GaFHm8iaysjkcBv8');
			params.append('client_secret', 'Gj5WYVxiEAfN6e5e');

			let headers =
				new HttpHeaders({'Content-type': 'application/x-www-form-urlencoded; charset=utf-8'});

			this.http.post('https://test.api.amadeus.com/v1/security/oauth2/token',
				params.toString(), {headers: headers})
				.subscribe(
					data => {
						console.log(data)
						localStorage.setItem('token', data['access_token']);
						this.currentUserObject.next(data['access_token']);
						// this.currentUserSubject.next(data.access_token);
						// this.http.get('https://test.api.amadeus.com/v1/shopping/flight-destinations?origin=PAR&maxPrice=200', {})
					});
		} else {
			let token = localStorage.getItem('token');
			this.currentUserObject.next(token);
		}
	}

	getData(id) {
		let cityCode = id ? id : this.searchForPlace['_value'];
		return this.http.get<HotelOffers>('https://test.api.amadeus.com/v2/shopping/hotel-offers?cityCode=' + cityCode)
	}

}
