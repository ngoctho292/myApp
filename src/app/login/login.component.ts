import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppService } from '../services/app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  // username!: string;
  // password!: string;
  name: any;

  loginInfo = {
    UserName: '',
    Password: '',
    Type: 0,
  };

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private appService: AppService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: [''],
      password: ['', Validators.required],
    });
    // this.login();
  }

  // login1() {
  //   this.http
  //     .post('https://localhost:7148/api/Users/Login', this.loginForm.value)
  //     .subscribe(
  //       (res) => {
  //         // const result = Object.entries(res);
  //         // console.log(result[0]);
  //         // console.log(res.token);
  //         const user = res.find((a: any) => {
  //           return (
  //             a.username === this.loginForm.value.username &&
  //             a.password === this.loginForm.value.password
  //           );
  //         });
  //         if (user) {
  //           alert('Login Succesful');
  //           this.loginForm.reset();
  //           this.router.navigate(['dashboard']);
  //         } else {
  //           alert('user not found');
  //         }
  //       },
  //       (err) => {
  //         alert('Something went wrong');
  //       }
  //     );
  // }
  login() {
    this.http
      .post(`${this.appService.apiRoot}api/Users/Login`, this.loginForm.value)
      .subscribe(
        (res: any) => {
          if (res.token === 'OK') {
            alert('Login Succesful');
            this.loginForm.reset();
            this.router.navigate(['dashboard']);
          } else {
            alert('user not found');
          }
        },
        (err) => {
          alert('Something went wrong');
        }
      );
  }
}
