import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { User } from './user.model';
import { Observable } from 'rxjs';

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

   public addUser(res) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const params = new HttpParams({
        fromObject: { Name : res.name,
            Email : res.email,
            Role : res.role,
            Status : 'Inactive',
            MobileNumber : res.mobilenumber
        }
    });

    return this.http.post(this.configUrl, params, { headers });
   }

   public updateUser(id, status, res) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const params = new HttpParams({
        fromObject: { Name : res.name,
            Email : res.email,
            Role : res.role,
            Status : status,
            MobileNumber : res.mobilenumber,
            _id : id
        }
    });

    const url = this.configUrl + '/' + id;

    return this.http.put(url, params, { headers });
   }

   public deleteUser(id: any) {
    return this.http.delete(this.configUrl + '/' + id);
   }
}
