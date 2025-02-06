import {Injectable} from '@angular/core';
import {User} from '../components/list-user/user';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  private userSource = new Subject<User>()
  currentUser = this.userSource.asObservable();

  constructor() {
  }

  setUser(user: User) {
    this.userSource.next(user);
  }
}
