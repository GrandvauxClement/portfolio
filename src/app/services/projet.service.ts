import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {Observable, throwError} from 'rxjs';
import {Projet} from '../models/projet';
import {retry, catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProjetService {
  apiURL = 'http://127.0.0.1:8000/api/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor( private router: Router, private http: HttpClient) {}
  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = 'Error code : ${error.status}\nMessage: ${error.message}';
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
  getProjets(): Observable<any> {
    return this.http.get<Projet[]>(this.apiURL + 'projets');
  }

  getProjetById(idProjet: number): Observable<Projet> {
    return this.http.get<Projet>(this.apiURL + 'projets/' + idProjet)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }
}
