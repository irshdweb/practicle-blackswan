import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.scss']
})
export class DashbordComponent implements OnInit {

  users:any = []; 

  constructor(
    private service: AuthService, 
    private router : Router) 
  { }

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

  viewUser(val:any){
    this.router.navigate(['/stats', val])
  }

}
