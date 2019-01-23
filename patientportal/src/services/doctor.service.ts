import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import {Http,Response, Headers, RequestOptions } from '@angular/http';
import {  environment } from '../environments/environment';

import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  token: any;
  status: any;
  constructor(private http: HttpClient) { }
  _doctorurl = 'https://f0d14338.ngrok.io/search?speciality=';
  // _doctorurl = 'https://07aab814.ngrok.io/search?location=Chennai';
  getDoctor() {
    return this.http.get(this._doctorurl);
  }

  update_doctor(doctors) {
    doctors.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    doctors.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    doctors.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    doctors.setHeader('Access-Control-Allow-Credentials', true);
      // var a = localStorage.getItem('admin');
      // var doc = JSON.parse(a);
      return this.http.post(`${environment.apiUrl}/search`, { name: doctors.name, speciality: doctors.speciality});
  }







}
