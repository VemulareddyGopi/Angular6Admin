import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Token } from '../models';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private isloggedIn = false;
    private redirectUrl = '';
    private loginUrl = 'login';
    constructor(private http: HttpClient) {
         if (localStorage.getItem('currentUser') && localStorage.getItem('currentUser') !== ''
          && localStorage.getItem('currentUser') !== undefined) {
            this.isloggedIn = true;
        }
     }

    login(Email: string, PassWord: string) {
        return this.http.post<Token>(environment.apiUrl + 'api/Login', { Email, PassWord })
        .pipe(data => {
                data.subscribe(resp => {
                    if (resp && resp.token) {
                        this.isloggedIn = true ;
                         localStorage.setItem('currentUser', JSON.stringify(resp));
                    }
                });
                return data;
            });

    }

    public getRedirectUrl(): string {
        return this.redirectUrl;
    }
    public setRedirectUrl(url: string): void {
        this.redirectUrl = url;
    }
    public getLoginUrl(): string {
        return this.loginUrl;
    }
     public isUserLoggedIn(): boolean {
        return this.isloggedIn;
    }

   public logout() {
        // remove user from local storage to log user out
        this.isloggedIn = false;
        localStorage.removeItem('currentUser');
    }
}
