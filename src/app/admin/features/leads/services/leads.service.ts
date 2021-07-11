import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LeadsService {
  constructor(private http: HttpClient) {}

  getAllLeads() {
    return this.http.get(
      environment.APIBaseUrl + environment.Leads.GetAllLeads
    );
  }
}
