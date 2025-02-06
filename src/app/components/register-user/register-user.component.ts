import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {User} from '../list-user/user';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  standalone: true,
  imports: [
    FormsModule
  ],
  styleUrl: './register-user.component.css'
})
export class RegisterUserComponent implements OnInit {
  userId: string | null = null;
  userData: User = new User();

  constructor(private route: ActivatedRoute,
              private http: HttpClient,
              private service: UserService) {
  }

  ngOnInit(): void {
    this.userId = this.route.snapshot.paramMap.get('userId');
    if (this.userId != null) {
      const user = this.service.users.find(u => u.id === parseInt(<string>this.userId));
      if (user) {
        this.userData.id = user.id;
        this.userData.name = user.name;
        this.userData.email = user.email;
        this.userData.gender = user.gender;
      }
    }
  }
}
