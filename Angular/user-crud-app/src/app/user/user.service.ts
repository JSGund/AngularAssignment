import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { User } from './user.model';
import { Observable } from 'rxjs';

const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });

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
    var userRole = 'Admin';

    if (res.Role === "admin") {
        userRole = 'Admin';
    } else if (res.Role === "customerexecutive"){
        userRole = 'Customer Executive';
    }

    const params = new HttpParams({
        fromObject: { Name : res.name,
            Email : res.email,
            Role : userRole,
            Status : 'Inactive',
            MobileNumber : res.mobilenumber
        }
    });

    return this.http.post(this.configUrl, params, { headers });
   }

   public updateUser(id, status, res) {
    var userRole = 'Admin';

    if (res.role === "admin") {
        userRole = 'Admin';
    } else if (res.role === "customerexecutive") {
        userRole = 'Customer Executive';
    }

    const params = new HttpParams({
        fromObject: { Name : res.name,
            Email : res.email,
            Role : userRole,
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
