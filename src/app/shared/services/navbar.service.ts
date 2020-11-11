import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BehaviorSubject} from "rxjs";
import {HotelOffers} from "../models/hotel.model";

@Injectable()
export class NavbarService {
	visible: boolean;
	constructor(public http: HttpClient) { this.visible = false; }

	hide() { this.visible = false; }

	show() { this.visible = true; }

	toggle() { this.visible = !this.visible; }



}
