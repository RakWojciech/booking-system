import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeSearchComponent} from './view/home-search/home-search.component';
import {HomeComponent} from './view/home/home.component';
import { NavigationComponent } from './view/components/navigation/navigation.component';
import {NavbarService} from "./shared/services/navbar.service";
import { ReactiveFormsModule } from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {Oauth2Interceptor} from "./shared/helpers/oauth2.interceptor";
import {AuthService} from "./shared/services/auth.service";
import {CitiesService} from "./shared/services/cities.service";
import { NgxFontAwesomeModule } from 'ngx-font-awesome';
import {LoaderService} from "./shared/services/loader.service";
import {SpinnerInterceptor} from "./shared/helpers/spinner.interceptor";
import { LoaderComponent } from './view/components/loader/loader.component';
import { ContactComponent } from './view/contact/contact.component';
import { AlertComponent } from './view/components/alert/alert.component';
import {AlertService} from "./view/components/alert/alert.service";

@NgModule({
	declarations: [
		AppComponent,
		HomeSearchComponent,
		HomeComponent,
		NavigationComponent,
		LoaderComponent,
		ContactComponent,
		AlertComponent
	],
	imports: [
		HttpClientModule,
		BrowserModule,
		AppRoutingModule,
		ReactiveFormsModule,
		NgxFontAwesomeModule
	],
	providers: [
		NavbarService,
		AuthService,
		CitiesService,
		LoaderService,
		AlertService,
		{provide: HTTP_INTERCEPTORS, useClass: Oauth2Interceptor, multi: true},
		{provide: HTTP_INTERCEPTORS, useClass: SpinnerInterceptor, multi: true}
	],
	bootstrap: [AppComponent]
})
export class AppModule {
}
