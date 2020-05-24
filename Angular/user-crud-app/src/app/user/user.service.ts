import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private configUrl: any = 'http://localhost:3000/users';

  constructor(private http: HttpClient) {

   }

   public getAllUsers() {
    return this.http.get<User[]>(this.configUrl);
   }
}
