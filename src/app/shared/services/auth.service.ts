import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BehaviorSubject} from "rxjs";

@Injectable()
export class AuthService {
	visible: boolean;
	currentUserSubject = new BehaviorSubject({});
	public get currentUserValue() {
		return this.currentUserSubject.value;
	}
	constructor(public http: HttpClient) {
		// this.retrieveToken();
	}

	getToken() {
		return localStorage.getItem('token');
	}


	retrieveToken() {
		// let params = new URLSearchParams();
		// params.append('grant_type','client_credentials');
		// params.append('client_id', 'gSF8S8ZXgqEly17Oaf3V1O5G4t2eCGzY');
		// params.append('client_secret', 'ClZPAaA6enZF84dh');
		//
		// let headers =
		// 	new HttpHeaders({'Content-type': 'application/x-www-form-urlencoded; charset=utf-8'});
		//
		// return this.http.post('https://test.api.amadeus.com/v1/security/oauth2/token',
		// 	params.toString(), { headers: headers });

	}


}
