import { Component, OnInit } from '@angular/core';
import {Subject} from "rxjs";
import {AlertService} from "./alert.service";

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {
	showAlert: Subject<boolean> = this.alert.showAlert;
	constructor(public alert: AlertService) { }

	ngOnInit(): void { }

}
