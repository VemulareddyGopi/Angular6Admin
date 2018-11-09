import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User, Message } from '../models';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>(environment.apiUrl + 'api/Login').pipe(data => data);
    }

     delateUser(Id) {
        return this.http.delete<Message>(environment.apiUrl + 'api/DeleteUser?Id=' + Id).pipe(data => data);
    }
     AddUpdateUser(user) {
        return this.http.post<Message>(environment.apiUrl + 'api/AddUser', user).pipe(data => data);
    }
}
