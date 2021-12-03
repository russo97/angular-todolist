import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './guards/auth.guard';

import { AddTaskComponent } from './components/add-task/add-task.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [{
  path: '', component: LoginComponent
}, {
  path: 'home', component: HomeComponent, canActivate: [AuthGuard]
}, {
  path: 'addtask', component: AddTaskComponent, canActivate: [AuthGuard]
}, {
  path: '**', redirectTo: ''
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
