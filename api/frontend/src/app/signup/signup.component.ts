import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ObserveOnOperator } from 'rxjs/internal/operators/observeOn';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { HttpService } from '@app/core';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment.prod';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  Formdata: any;
  page: number;
  serverUrl = environment.serverUrl;
  serverPort = environment.serverPort;
  baseUrl = `${this.serverUrl}:${this.serverPort}`;
  constructor(private http: HttpClient, private router: Router) {
    this.page = 1;
  }

  ngOnInit() {}
  signup(data: NgForm) {
    if (this.page === 1) {
      this.Formdata = {
        email: data.value.email,
        name: data.value.fullname,
        password: data.value.password,
        confirm_password: data.value.confirm_password,
        phone_no: '',
        company_name: '',
        company_address: '',
        roles: 'enterprise'
      };

      this.page = 2;
    } else {
      this.Formdata.phone_no = data.value.phone_number;
      this.Formdata.company_name = data.value.companyname;
      this.Formdata.company_address = data.value.company_address;

      let options = {
        headers: new HttpHeaders().set('Content-Type', 'application/json')
      };

      this.http.post(`${this.baseUrl}/signup`, { data: this.Formdata }, options).subscribe(
        data => {
          this.router.navigate(['login']);
        },
        error => {
          console.log(JSON.stringify(error));
        }
      );

      /* this.http.post(`${this.baseUrl}/api/v1/signup`, { data: this.Formdata }, options).subscribe(
        data => {
          this.router.navigate(['login']);
        },
        error => {
          console.log(JSON.stringify(error));
        }
      ); */
      // var request = new XMLHttpRequest();
      // request.open('POST', 'http://18.222.162.8:8000/api/v1/signup');

      // request.setRequestHeader('Content-Type', 'application/jsonp');

      // request.onreadystatechange = function () {
      //   if (this.readyState === 4) {
      //     console.log('Status:', this.status);
      //     console.log('Headers:', this.getAllResponseHeaders());
      //     console.log('Body:', this.responseText);
      //   }
      // };
      // request.send(JSON.stringify(this.Formdata));
    }
  }
}
