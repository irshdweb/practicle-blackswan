import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {

  constructor(
    private actRoute: ActivatedRoute, 
    private service: AuthService, 
    private router : Router) { }

  userID = this.actRoute.snapshot.params.user_id;
  allUsers:any = [];
  findData:any = [];
  filtData:any=  [];
  completeTask:any = [];
  unCompleteTask:any = [];


  public totalTask:any;
  public uncompleteData:any;
  public completedData:any;

  chart:any = [];
  piechart:any = [];
  
  ngOnInit() {
    this.userdata();
  }

  userdata(){
    this.service.getUserStats().subscribe(
      (res:any) => {
        this.allUsers = res;
        this. getfilt();
      },
      err => {
        console.log(err);
      }
    )
  }

  getfilt(){

        for(let us of this.allUsers){
          this.findData.push(us);
          this.filtData = this.findData.filter(x => x.userId == this.userID);
          this.completeTask = this.filtData.filter(x => x.completed == true);
          this.unCompleteTask= this.filtData.filter(x => x.completed == false);
        }

        this.totalTask = this.filtData.length;
        this.uncompleteData = this.unCompleteTask.length;
        this.completedData = this.completeTask.length;


        //Bar Chart For Uncompleted Items

        this.chart = new Chart('canvas', {
          type: 'bar',
          data: {
            labels: ['Uncompleted Task', 'Total Task'],
            datasets: [
              { 
                data:[this.uncompleteData, this.totalTask],
                fill: false,
                lineTension: 0.1,
                borderColor: "#7858C3"
              }
            ]
          },
          options: {
            legend: {
              display: false
            },
            scales: {
              xAxes: [{
                display: true
              }],
              yAxes: [{
                display: true
              }],
            }
          }
        });


       //Pie Chart For Uncompleted Items
        this.piechart = new Chart('canvaspie', {
          type: 'pie',
          data: {
            labels: ['Completed Task', 'Total Task'],
            datasets: [
              { 
                data:[this.completedData, this.totalTask],
                borderColor: "#7858C3",
                fill: false
              }
            ]
          },
          options: {
            legend: {
              display: false
            },
            scales: {
              xAxes: [{
                display: true
              }],
              yAxes: [{
                display: true
              }],
            }
          }
        });
}

backtoDashbord(){
  this.router.navigate(['/dashbord']);
  console.log("yes")
}


}
