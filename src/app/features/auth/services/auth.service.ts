import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { EmployeeModel } from '../models/EmployeeSignup.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  EmployeeSignup(model: EmployeeModel) {
    var body = {
      email: model.email.toString(),
      userName: model.userName.toString(),
      firstName: model.firstName.toString(),
      lastName: model.lastName.toString(),
      password: model.password.toString(),
      phoneNumber: model.phoneNumber.toString(),
      profilePic: model.profilePic.toString(),
    };
    return this.http.post(
      environment.APIBaseUrl + environment.AuthUrls.Employee,
      body
    );
  }
}
