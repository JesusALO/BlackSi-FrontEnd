import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:3000'; // Replace with your API base URL

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    const loginData = { email, password };
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, DELETE, PUT'
      })
    };

    return this.http.post(`${this.baseUrl}/login`, loginData, httpOptions);
  }

  getCustomer(): Observable<any> {
    const url = `${this.baseUrl}/deliveryInfo`; // Replace '/customerInfo' with the appropriate API endpoint for customer information
    return this.http.get<any>(url).pipe(
      tap((response) => console.log(response)), // Log the response
      catchError((error) => {
        console.log('Error fetching customer information:', error); // Log any error
        return throwError(error); // Rethrow the error
      })
    );
  }
  
}
