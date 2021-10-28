import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IDiabetes} from '../Interfaces/Interfaces';
import {catchError, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DiabetesService {

  baseUrl = 'https://localhost:44362/api/Diabetes/';
  IdNum: number;

  constructor(private http: HttpClient) { }

  getDiabetesReadings(): Observable<IDiabetes[]> {
    console.log(this.http.get<IDiabetes[]>(this.baseUrl));
    return this.http.get<IDiabetes[]>(this.baseUrl);

  }

  getSingleReading(id: number): Observable<IDiabetes> {
    return this.http.get<IDiabetes>(this.baseUrl + id);

  }
  postDiabetesReading(sugarReading: IDiabetes): Observable<IDiabetes> {
      return this.http.post<IDiabetes>(this.baseUrl, sugarReading);
  }

  deleteDiabetesReading(id: number): Observable<IDiabetes> {
    return this.http.delete<IDiabetes>(this.baseUrl + id);
  }

  setIdNumber(id: number) {
   this.IdNum = id;
  }
  getIDNum() {
  return this.IdNum + 1;
  }

}
