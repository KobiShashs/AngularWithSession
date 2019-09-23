import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Credentials } from '../models/credentials';
import { Observable } from 'rxjs';
import { LoginResult } from '../models/login-result';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

 public constructor(private httpClient:HttpClient) { }

  public loginCommand(credentials:Credentials):Observable<LoginResult>{
    //post these details to Http Remote server and return user details
    //return this.httpClient.post<LoginResult>("http://localhost:8080/mysite/login",credentials,{withCredentials:true});
    return this.httpClient.get<LoginResult>("assets/json/server-demo.json");
  }
}
