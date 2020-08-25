import { Component, OnInit } from '@angular/core';
import {NavbarService} from "../../../shared/services/navbar.service";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor(public nav: NavbarService) { }

  ngOnInit(): void {
  }

}
