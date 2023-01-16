import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  constructor(private http: HttpClient) {}

  getCustomersLarge() {
    return this.http
      .get<any>('https://localhost:7148/DataSamples')
      .toPromise()
      .then((res) => <User[]>res.data)
      .then((data) => {
        return data;
        console.log(data);
      });
  }
}
