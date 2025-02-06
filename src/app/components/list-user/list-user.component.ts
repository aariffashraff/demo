import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from './user';
import { NgForOf } from '@angular/common';
import { UserService } from '../../services/user.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list-user',
  standalone: true,
  imports: [NgForOf, FormsModule],
  templateUrl: './list-user.component.html',
  styleUrl: './list-user.component.css'
})
export class ListUserComponent implements OnInit {
  users: User[] = [];
  genderFilter: string = '';
  emailFilter: string = '';

  constructor(private userService: UserService, private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.users = this.userService.users || []; // Ensure users array is initialized
  }

  /** ✅ Add filteredUsers as a **getter** function */
  get filteredUsers(): User[] {
    return this.users.filter(user =>
      (this.genderFilter === '' || user.gender === this.genderFilter) &&
      (this.emailFilter === '' || user.email?.toLowerCase().includes(this.emailFilter.toLowerCase()))
    );
  }


  editUser(userId: number | undefined) {
    this.router.navigate(['/register', userId]); // Navigate to edit page
  }
}
