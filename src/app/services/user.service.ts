import { Injectable } from '@angular/core';
import {User} from '../components/list-user/user';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[] = [];

  constructor(private http: HttpClient) {
    this.http.get<User[]>('https://easyshop.free.beeceptor.com/user/list').subscribe((users) => {
      this.users = users;
    });
  }
}
