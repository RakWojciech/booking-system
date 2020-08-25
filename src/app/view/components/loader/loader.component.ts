import { Component, OnInit } from '@angular/core';
import {Subject} from "rxjs";
import {LoaderService} from "../../../shared/services/loader.service";

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

	isLoading: Subject<boolean> = this.loader.isLoading;
	constructor(public loader: LoaderService) { }

	ngOnInit(): void {
}

}
