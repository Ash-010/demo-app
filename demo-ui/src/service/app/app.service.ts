import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(
    private http: HttpClient,
  ) { }

  getMockData(): Observable<any> {
    const reqUrl = `http://localhost:3000/`;
    return this.http.get(reqUrl);
  }
}
