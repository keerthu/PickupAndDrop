import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SignInComponent} from './sign-in/sign-in.component';
import {SignUpComponent} from './sign-up/sign-up.component';
import { CreateComplaintComponent } from './complaints/create-complaint/create-complaint.component';
import { ListComplaintsComponent } from './complaints/list-complaints/list-complaints.component';
import { ComplaintListResolver } from './helpers/ComplaintListResolver';
import { AuthGuard } from './guards/auth-guard.service';
import { HomeComponent } from './home/home.component';
import { GetComplaintComponent } from './complaints/get-complaint/get-complaint.component';
const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'signin',
    component: SignInComponent
  },
  {
    path: 'signup',
    component: SignUpComponent
  },
  {
    path: 'complaint/create',
    component: CreateComplaintComponent
  },
  {
    path: 'complaints',
    component: ListComplaintsComponent,
    resolve: {complaints: ComplaintListResolver},
    data: {requiresLogin: true},
    canActivate: [AuthGuard]
  },
  {
    path: 'complaint/:id',
    component: GetComplaintComponent,
    resolve: {complaints: ComplaintListResolver},
    data: {requiresLogin: true},
    canActivate: [AuthGuard]
  },
  // otherwise redirect to home
  { 
    path: '**', redirectTo: '' 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})

export class AppRoutingModule { }
