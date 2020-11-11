import {Component} from '@angular/core';
import {LoaderService} from "./shared/services/loader.service";
import {NavbarService} from "./shared/services/navbar.service";
import {BehaviorSubject, Observable, Subject} from "rxjs";

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title;
	constructor(public loader: LoaderService, public nav: NavbarService) {}

	ngOnInit() {
		this.nav.retrieveToken();
	}
}
