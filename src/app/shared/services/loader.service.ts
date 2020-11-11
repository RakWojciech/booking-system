import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from "rxjs";

@Injectable()
export class LoaderService {
	isLoading = new Subject<boolean>();

	constructor() {
	}

	show() {
		this.isLoading.next(true);

		console.log('Show');
	}

	hide() {
		this.isLoading.next(false);
		console.log('Hide');
	}
}
