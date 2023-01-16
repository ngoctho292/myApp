import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { City } from '../models/city';
import { AppService } from '../services/app.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
})
export class HistoryComponent implements OnInit {
  message = '';
  SchoolsList: any;
  item: any;
  ClassInfor: any;
  SchoolId: any;

  cities: City[];

  selectedCity: City;
  selectedValue: number;

  changeSchool(event: any) {
    this.selectedValue = event.target.value;
  }
  constructor(
    private http: HttpClient,
    private router: Router,
    private appService: AppService
  ) {}

  ngOnInit(): void {
    this.getClass();
  }

  getClass(): void {
    this.appService.getList().subscribe((data: any) => {
      this.SchoolsList = data;
    });
  }
}
