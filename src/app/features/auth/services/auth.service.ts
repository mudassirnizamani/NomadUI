import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ClientModel } from '../models/ClientSignup.interface';
import { EmployeeModel } from '../models/EmployeeSignup.interface';
import { SigninModel } from '../models/Signin.interface';

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

  ClientSignup(model: ClientModel) {
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
      environment.APIBaseUrl + environment.AuthUrls.Client,
      body
    );
  }

  GetUserRole(userName: string) {
    return this.http.get(
      `${environment.APIBaseUrl}${environment.UserRoles.UserName}${userName}`
    );
  }

  Sigin(model: SigninModel) {
    var body = {
      userName: model.userName.toString(),
      password: model.password.toString(),
    };

    return this.http.post(
      environment.APIBaseUrl + environment.AuthUrls.Signin,
      body
    );
  }
}
