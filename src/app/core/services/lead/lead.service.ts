import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LeadService {
  constructor(private http: HttpClient) {}

  getAllLeads() {
    return this.http.get(
      environment.APIBaseUrl + environment.Leads.GetAllLeads
    );
  }
}
