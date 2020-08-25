import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./view/home/home.component";
import {HomeSearchComponent} from "./view/home-search/home-search.component";
import {PageNotFoundComponent} from './view/page-not-found/page-not-found.component';
import {ContactComponent} from "./view/contact/contact.component";

const routes: Routes = [
	{
		path: "",
		component: HomeSearchComponent
	}, {
		path: "home/:id",
		component: HomeComponent
	}, {
		path: "contact",
		component: ContactComponent
	},
	{ path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
