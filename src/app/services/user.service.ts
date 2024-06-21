import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://localhost:8090';

  constructor(private http: HttpClient) { }

  getUser(documentType: string, documentNumber: string): Observable<any> {
    const url = `${this.apiUrl}/user?documentType=${documentType}&documentNumber=${documentNumber}`;
    return this.http.get(url);
  }
}
