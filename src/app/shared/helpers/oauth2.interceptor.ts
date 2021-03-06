import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {NavbarService} from "../services/navbar.service";
import {AuthService} from "../services/auth.service";
import {catchError, tap} from "rxjs/operators";

@Injectable()
export class Oauth2Interceptor implements HttpInterceptor {
	auth_token;
	constructor(public nav: NavbarService, public auth: AuthService) {}

	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		// let auth_token = this.nav.currentUserData;
		this.auth.currentUserData.pipe(
			tap (
				token => {
					this.auth_token = token
					if(this.auth_token) {
						req = req.clone(
							{
								setHeaders: {
									Authorization: `Bearer ${this.auth_token}`
								}
							}
						)
					}
				}
			)
		).subscribe(
			data => console.log(data)
		);
		return next.handle(req);
	}
}
