import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {AuthorizationService} from './services/authorization.service';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'demo';
  authenticated = false;

  constructor(private authService: AuthorizationService) {
  }

  ngOnInit(): void {
    this.authService.currentUser.subscribe(user => {
      this.authenticated = true;
    })
  }

}
