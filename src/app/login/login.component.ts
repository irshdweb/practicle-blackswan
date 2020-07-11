import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private service: AuthService, 
    private router : Router) 
  { }

  users:any = [];
  emailtext:any;
  passtext:any;
  userMail:any;
  userPassword:any;
  errorMessage:boolean = false;

  ngOnInit() {
    this.userdata();
  }

  userdata(){
    this.service.getUser().subscribe(
      (res:any) => {
        this.users = res;
      },
      err => {
        console.log(err);
      }
    )
  }

  logForm(frm:any){
    this.userMail = frm.mail;
    this.userPassword = frm.password;
    const user = this.users.find(x => x.email === this.userMail && x.username === this.userPassword);
    console.log(user)

    if(!user){
      this.errorMessage = true;
    }else{
      this.errorMessage = false;
      this.router.navigate(['/dashbord']);
    }
  }

}
