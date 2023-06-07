import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    const loginData = { email, password };
    return this.http.post('localhost:3000/login', loginData);
  }

}
