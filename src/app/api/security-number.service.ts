import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SecurityNumberService {
  constructor(private httpClient: HttpClient) { }

  validate(securityNumber: string): Observable<boolean> {
    return this.httpClient.get(`https://api.test/validate/${securityNumber}`).pipe(
      map(() => true),
      catchError(() => [false])
    );
  }
}
