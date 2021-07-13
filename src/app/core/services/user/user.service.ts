import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getAuthenticatedUser() {
    var tokenHeader = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    });
    return this.http.get(
      environment.APIBaseUrl + environment.AuthUrls.GetUser,
      { headers: tokenHeader }
    );
  }

  getAllUsers() {
    return this.http.get(environment.APIBaseUrl + environment.User.GetAllUsers);
  }

  getAllUsersCount() {
    return this.http.get(
      environment.APIBaseUrl + environment.User.GetAllUSerCount
    );
  }

  gerUserByUserName(username: string) {
    return this.http.get(
      `${environment.APIBaseUrl}${environment.User.GetUserByUserName}${username}`
    );
  }
}
