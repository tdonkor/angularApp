import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IBills} from '../Interfaces/Interfaces';


@Injectable({
  providedIn: 'root'
})
export class BillsService {

  baseUrl = 'https://localhost:44362/api/Bills/';
  IdNum: number;

  constructor(private http: HttpClient) { }

  getBillsReadings(): Observable<IBills[]> {
    return this.http.get<IBills[]>(this.baseUrl);
  }

  getSingleBill(id: number): Observable<IBills> {
    return this.http.get<IBills>(this.baseUrl + id);

  }
  postBillReading(billReading: IBills): Observable<IBills> {
    return this.http.post<IBills>(this.baseUrl, billReading);
  }

  deleteBillReading(id: number): Observable<IBills> {
    return this.http.delete<IBills>(this.baseUrl + id);
  }
  updateBill(bill: IBills): Observable<IBills> {
    return this.http.put<IBills>(this.baseUrl, bill);
  }

  setIdNumber(id: number) {
    this.IdNum = id;
  }
  getIDNum() {
    return this.IdNum + 1;
  }
}
