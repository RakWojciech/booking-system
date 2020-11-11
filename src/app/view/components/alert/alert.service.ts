import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable()
export class AlertService {
	showAlert = new Subject<boolean>();

	constructor() {
	}

	show() {
		this.showAlert.next(true);
	}

	hide() {
		this.showAlert.next(false);
	}
}
