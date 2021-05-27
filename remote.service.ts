import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { User } from './remote';

@Injectable({
  providedIn: 'root'
})
export class RemoteService {
  url = 'http://localhost:8080/angular';

  constructor(private http: HttpClient) { }
  getData(): Observable<User[]> {
    console.log(this.http.get<any>(this.url));
    return this.http.get<User[]>(this.url);
  }
}
