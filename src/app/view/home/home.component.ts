import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {NavbarService} from "../../shared/services/navbar.service";
import {catchError, tap} from "rxjs/operators";
import {Observable, throwError} from "rxjs";
import {AlertService} from "../components/alert/alert.service";

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	Arr = Array;
	url;
	hotelList;
	form;

	constructor(private router: Router, public nav: NavbarService, private route: ActivatedRoute, public alert: AlertService) {
		this.url = this.router.url;
		console.log(this.url);
		if (this.url === '/home') {

		}
		this.nav.show();
	}

	ngOnInit(): void {
		this.form = JSON.parse(localStorage.getItem('form'));
		console.log(this.form)
		let id = this.route.snapshot.paramMap.get("id");
		this.nav.getData(id).pipe(
			tap(
				result => {

					console.log(result);
					this.hotelList = result;
				}
			),
			catchError(
				error => {
					alert('blad')
					if (error.status === 401) {
						localStorage.removeItem('token');
						localStorage.removeItem('form');
						this.nav.retrieveToken();
						this.router.navigateByUrl('/');
					}
					return throwError(error);
				}
			)
		).subscribe()
	}
	onSubmit() {
		this.alert.show()
		setTimeout(
			() => {
				this.alert.hide();
			}, 3000
		)
	}
}
