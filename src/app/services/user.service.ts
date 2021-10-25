import { Injectable } from '@angular/core';
import { Login } from '../models/login';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment'


@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}
  data: Login = {
    Email: '',
    Password: '',
  };
  private API_URL = environment.API_URL;
  getUser() {
    return this.http.get(this.API_URL);
  }
  loginService(input: any) {
    return input;
  }
}
