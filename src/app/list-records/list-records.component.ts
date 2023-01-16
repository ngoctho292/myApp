import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { AppService } from '../services/app.service';
import { ActivatedRoute } from '@angular/router';
import { Customer, Representative } from '../records/record';

@Component({
  selector: 'app-list-records',
  templateUrl: './list-records.component.html',
  styleUrls: ['./list-records.component.scss'],
  providers: [MessageService],
})
export class ListRecordsComponent implements OnInit {
  customers: Customer[];

  representatives: Representative[];

  statuses: any[];

  loading: boolean = false;

  items: any;

  activityValues: number[] = [0, 100];
  constructor(
    private customerService: AppService,
    private appService: AppService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // this.getStudents(this.route.snapshot.paramMap.get('id'));
    this.customerService.getCustomersLarge().then((customers) => {
      this.customers = customers;
      this.loading = false;

      this.customers.forEach(
        (customer) => (customer.date = new Date(customer.date))
      );
    });

    this.representatives = [
      { name: 'Amy Elsner', image: 'amyelsner.png' },
      { name: 'Anna Fali', image: 'annafali.png' },
      { name: 'Asiya Javayant', image: 'asiyajavayant.png' },
      { name: 'Bernardo Dominic', image: 'bernardodominic.png' },
      { name: 'Elwin Sharvill', image: 'elwinsharvill.png' },
      { name: 'Ioni Bowcher', image: 'ionibowcher.png' },
      { name: 'Ivan Magalhaes', image: 'ivanmagalhaes.png' },
      { name: 'Onyama Limba', image: 'onyamalimba.png' },
      { name: 'Stephen Shaw', image: 'stephenshaw.png' },
      { name: 'XuXue Feng', image: 'xuxuefeng.png' },
    ];

    this.statuses = [
      { label: 'Unqualified', value: 'unqualified' },
      { label: 'Qualified', value: 'qualified' },
      { label: 'New', value: 'new' },
      { label: 'Negotiation', value: 'negotiation' },
      { label: 'Renewal', value: 'renewal' },
      { label: 'Proposal', value: 'proposal' },
    ];
  }
  // getStudents(id: any): void {
  // this.appService
  // .getStudents(id)
  //     .subscribe((data: any) => (this.items = data));
  // }
}
