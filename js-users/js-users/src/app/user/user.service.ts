import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiServerUrl = environment.apiBaseUrl

  constructor(private http: HttpClient) { }
  
  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiServerUrl}`);
  }
}
