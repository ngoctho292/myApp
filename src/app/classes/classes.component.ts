import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../services/app.service';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss'],
})
export class ClassesComponent implements OnInit {
  items: any;
  constructor(private route: ActivatedRoute, private appService: AppService) {}

  ngOnInit(): void {
    this.getClasses(this.route.snapshot.params['id']);
  }
  getClasses(id: any): void {
    this.appService
      .getClasses(id)
      .subscribe((data: any) => (this.items = data));
  }
}
