import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {finalize, map, tap} from "rxjs/operators";
import {LoaderService} from "../services/loader.service";

@Injectable()
export class SpinnerInterceptor implements HttpInterceptor {
	constructor(public loader: LoaderService) {
	}
	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		return next.handle(req).pipe(
			map( event => {
				//show spinner
				this.loader.show();
				return event;
			}),
			finalize( () => {
				//hide spinner
				this.loader.hide();
			})
		)
	}
}
