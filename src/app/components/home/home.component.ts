import { Component } from '@angular/core';
import {RegisterUserComponent} from '../register-user/register-user.component';
import {ListUserComponent} from '../list-user/list-user.component';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [
    RegisterUserComponent,
    ListUserComponent,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
