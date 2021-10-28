import { Injectable } from '@angular/core';
import {IAddresses, ILogin} from '../Interfaces/Interfaces';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl = 'https://localhost:44348/api/Login/';
  constructor(private http: HttpClient) { }

  login(email: string, password: string) {

  }

  postAddress(login: ILogin): Observable<ILogin> {
    return this.http.post<ILogin>(this.baseUrl, login);
  }
}
