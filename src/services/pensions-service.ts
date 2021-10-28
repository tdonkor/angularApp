import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IPensions} from '../Interfaces/Interfaces';


@Injectable({
  providedIn: 'root'
})
export class PensionsService {

  baseUrl = 'https://localhost:44362/api/Pensions/';
  IdNum: number;

  constructor(private http: HttpClient) { }

  getPensionsReadings(): Observable<IPensions[]> {
    return this.http.get<IPensions[]>(this.baseUrl);
  }

  getSinglePension(id: number): Observable<IPensions> {
    return this.http.get<IPensions>(this.baseUrl + id);

  }
  postPensionReading(pensionReading: IPensions): Observable<IPensions> {
    return this.http.post<IPensions>(this.baseUrl, pensionReading);
  }

  deletePensionReading(id: number): Observable<IPensions> {
    return this.http.delete<IPensions>(this.baseUrl + id);
  }
  updatePension(pen: IPensions): Observable<IPensions> {
    return this.http.put<IPensions>(this.baseUrl, pen);
  }

  setIdNumber(id: number) {
    this.IdNum = id;
  }
  getIDNum() {
    return this.IdNum + 1;
  }
}
