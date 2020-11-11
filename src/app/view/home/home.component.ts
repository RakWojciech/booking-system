import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {NavbarService} from "../../shared/services/navbar.service";
import {catchError, tap} from "rxjs/operators";
import {Observable, Subscription, throwError} from "rxjs";
import {AlertService} from "../components/alert/alert.service";
import {AuthService} from "../../shared/services/auth.service";

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
	subscription: Subscription;
	Arr = Array;
	url;
	hotelList;
	form;

	constructor(
		private router: Router, public nav: NavbarService,
		private route: ActivatedRoute, public alert: AlertService, public auth: AuthService) {
		this.url = this.router.url;
		this.nav.show();
	}

	ngOnInit(): void {
		this.form = JSON.parse(localStorage.getItem('form'));
		let id = this.route.snapshot.paramMap.get("id");
		this.hotelList = this.auth.getData(id);
	}

	openOffer(id): void {
		// this.alert.show();
		// setTimeout(
		// 	() => {
		// 		this.alert.hide();
		// 	}, 3000
		// );
	}

	ngOnDestroy(): void {
		// this.subscription.unsubscribe();
	}
}
