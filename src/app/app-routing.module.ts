import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./view/home/home.component";
import {HomeSearchComponent} from "./view/home-search/home-search.component";

const routes: Routes = [
  {
    path: "",
    component: HomeSearchComponent
  },{
    path: "home",
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
