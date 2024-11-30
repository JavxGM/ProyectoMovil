import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = 'https://uasdapi.ia3x.com';

  constructor(private http: HttpClient) {}

  getRoot(): Observable<any> {
    return this.http.get(`${this.baseUrl}/`);
  }

  login(data: { username: string; password: string }): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, data);
  }
}
