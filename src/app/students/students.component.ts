import { Component, OnInit } from '@angular/core';
import { AppService } from '../services/app.service';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Customer, Representative } from '../records/record';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss'],
})
export class StudentsComponent implements OnInit {
  items: any;
  subjectName: any;
  customers: Customer[];

  representatives: Representative[];

  statuses: any[];

  loading: boolean = false;
  cars: any;
  virtualCars: any;

  activityValues: number[] = [0, 100];
  constructor(private appService: AppService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getStudents(this.route.snapshot.paramMap.get('id'));
    this.appService.getCustomersLarge().then((customers) => {
      this.customers = customers;
      this.loading = false;

      this.customers.forEach(
        (customer) => (customer.date = new Date(customer.date))
      );
    });

    this.statuses = [
      { label: 'Đã Ký', value: 'Đã Ký' },
      { label: 'Nháp', value: 'Nháp' },
      { label: 'New', value: 'new' },
      { label: 'Negotiation', value: 'negotiation' },
      { label: 'Renewal', value: 'renewal' },
      { label: 'Proposal', value: 'proposal' },
    ];
    // this.cars = Array.from({ length: 10000 }).map((_, i) =>
    //   this.appService.generateCar(i + 1)
    // );
    // this.virtualCars = Array.from({ length: 10000 });
  }
  getStudents(id: any): void {
    this.appService
      .getStudents(id)
      .subscribe((data: any) => (this.items = data));
  }
}
