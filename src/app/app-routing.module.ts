import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { StatsComponent } from './stats/stats.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dashbord', component: DashbordComponent },
  { path: 'stats/:user_id', component: StatsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
