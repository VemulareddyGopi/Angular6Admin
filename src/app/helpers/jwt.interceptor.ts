import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
         if (currentUser && currentUser.token) {
            request = request.clone({
                setHeaders: {
                    Authorization: currentUser.tokenType + ' ' + currentUser.token
                }
            });
        }

        return next.handle(request);
    }
}
