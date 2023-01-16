import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../records/record';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppService implements OnInit {
  apiRoot = 'https://localhost:7148/';

  ngOnInit(): void {}

  constructor(private http: HttpClient) {}

  getList(): Observable<any[]> {
    return this.http.get<any>(this.apiRoot + 'api/Schools');
  }
  getClasses(SchoolId: number): Observable<any> {
    return this.http.get<any>(`${this.apiRoot}api/Classes/${SchoolId}`);
  }
  getStudents(ClassId: number): Observable<any> {
    return this.http.get<any>(`${this.apiRoot}GetByClassId/${ClassId}`);
  }
  getCustomersLarge() {
    return this.http
      .get<any>('assets/records-large.json')
      .toPromise()
      .then((res) => <Customer[]>res.data)
      .then((data) => {
        return data;
        console.log(data);
      });
  }
}
