import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  API="http://localhost:8080";
  public registerUser(userData: any)
  {
    return this.http.post(`${this.API}/userservice` , userData);
  }

  public getUsers(){
    return this.http.get(`${this.API}/userservice`);
  }

  public deleteUser(userId:any){
    return this.http.delete(`${this.API}/userservice/${userId}`);
  }

  public updateUser(user: any){
    return this.http.put(`${this.API}/userservice/${user.userid}`, user);
  }
  constructor(private http: HttpClient) { }
}
