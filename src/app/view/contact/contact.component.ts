import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {NavbarService} from "../../shared/services/navbar.service";
import { Validators } from '@angular/forms';
import {AlertService} from "../components/alert/alert.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
	contactForm = new FormGroup({
		firstName: new FormControl(''),
		lastName: new FormControl(''),
		email: new FormControl('',[
			Validators.required,
			Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
		phoneNumber: new FormControl(''),
		text: new FormControl(''),
	});
	constructor(public nav: NavbarService, public alert: AlertService) {
  		this.nav.show();
	}
	get email(){
		return this.contactForm.get('email')
	}

	ngOnInit(): void {
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
