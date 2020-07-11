import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) { }

  getUser(){
    return this.http.get(this.baseUrl+'/users');
  }

  getUserStats(){
    return this.http.get(this.baseUrl+'/todos');
  }
}
