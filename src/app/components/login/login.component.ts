import { Component, OnInit } from '@angular/core';
import { Credentials } from 'src/app/models/credentials';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public credentials = new Credentials();
  public constructor(private authService:AuthService,private router: Router) { }

  ngOnInit() {
  }
  login():void{
    this.authService.loginCommand(this.credentials).subscribe(loginResult=>{
      console.log("login button was clicked");
      console.log("here is server result:");
      console.log("loginResult.type : "+loginResult.type);
      console.log("loginResult.isLoggedIn : "+loginResult.isLoggedIn);
      console.log("loginResult.sessionToken : "+loginResult.sessionToken);
    });
      
  }

}
