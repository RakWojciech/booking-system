import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {NavbarService} from "../../shared/services/navbar.service";
import { FormGroup, FormControl } from '@angular/forms';
import {CitiesService} from "../../shared/services/cities.service";
import {LoaderService} from "../../shared/services/loader.service";

@Component({
	selector: 'app-home-search',
	templateUrl: './home-search.component.html',
	styleUrls: ['./home-search.component.scss']
})
export class HomeSearchComponent implements OnInit {
	url;
	placeSearchForm = new FormGroup({
		goingToPlace: new FormControl(''),
		departTime: new FormControl(''),
		returnTime: new FormControl(''),
		passangerCount: new FormControl(''),
		placeClass: new FormControl(''),
	});
	cities;

	constructor(private router: Router, public nav: NavbarService, public city: CitiesService, public loader: LoaderService) {
		this.url = this.router.url;
		if (this.url === '/') {
			this.nav.hide();
		}
	}

	ngOnInit(): void {}

	onSubmit(): void {
		this.loader.show();
		this.cities = this.city.getCities();
		const entries = Object.entries(this.cities);
		const form = JSON.parse(localStorage.getItem('form'));
		if (form) {
			localStorage.removeItem('form');
		}
		localStorage.setItem('form', JSON.stringify(this.placeSearchForm.value));

		for (const [key, value] of entries) {
			let cityName = this.placeSearchForm.value.goingToPlace;
			const cityNameFirstLetter = cityName.toUpperCase().charAt(0);
			cityName = cityName.substr(1);
			cityName = cityNameFirstLetter + cityName;
			if ( cityName === value) {
				this.router.navigateByUrl('home/' + key);
			} else {
				this.placeSearchForm.controls['goingToPlace'].setErrors({ 'incorrect': true});
			}
		}
		this.loader.hide();
	}
}
