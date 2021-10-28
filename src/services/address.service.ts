import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IAddresses, IDiabetes} from '../Interfaces/Interfaces';
import {Address} from '../models/address';

@Injectable({
  providedIn: 'root'
})
export class AddressService {
  baseUrl = 'https://localhost:44362/api/Addresses/';
  IdNum: number;

  constructor(private http: HttpClient) { }

  getAddresses(): Observable<IAddresses[]> {
    return this.http.get<IAddresses[]>(this.baseUrl);
  }

  getSingleAddress(id: number): Observable<IAddresses> {
    return this.http.get<IAddresses>(this.baseUrl + id);

  }
  postAddress(address: IAddresses): Observable<IAddresses> {
    return this.http.post<IAddresses>(this.baseUrl, address);
  }

  deleteAddress(id: number): Observable<IAddresses> {
    return this.http.delete<IAddresses>(this.baseUrl + id);
  }

  updateAddress(address: IAddresses): Observable<IAddresses> {
 return this.http.put<IAddresses>(this.baseUrl, address);
  }

  setIdNumber(id: number) {
    this.IdNum = id;
  }
  getIDNum() {
    return this.IdNum + 1;
  }
}

