import { Injectable } from '@angular/core';
import {Contact} from '../models/contact';
import {Observable, throwError} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { retry, catchError } from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  apiUrl = 'http://127.0.0.1:8000/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  constructor(private  http: HttpClient) { }
  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      errorMessage = 'Error Code: ${error.status}\nMessage: ${error.message}';
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  addMessage(contact: Contact): Observable<Contact> {
    console.log('je passe ici');
   /* const httpOptions = {
      headers: new HttpHeaders({ 'Authorization': 'Bearer '})
    };*/
    return this.http.post<Contact>(this.apiUrl + 'api/contacts', contact, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }
}
