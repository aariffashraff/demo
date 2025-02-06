import { Routes } from '@angular/router';
import {RegisterUserComponent} from './components/register-user/register-user.component';
import {ListUserComponent} from './components/list-user/list-user.component';
import {HomeComponent} from './components/home/home.component';
import {LoginComponent} from './components/login/login.component';

export const routes: Routes = [
  {path: 'register-user', component: RegisterUserComponent},
  {path: 'list-user', component: ListUserComponent},
  { path: 'register/:userId', component: RegisterUserComponent },
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent}
];
