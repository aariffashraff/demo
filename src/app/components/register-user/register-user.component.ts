import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {User} from '../list-user/user';

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

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    this.userId = this.route.snapshot.paramMap.get('userId'); // Get userId from URL
    if (this.userId) {
      this.http.get(`https://easyshop.free.beeceptor.com/user/${this.userId}`)
        .subscribe((user: any) => {
          this.userData = user;
        });
    }
  }
}
