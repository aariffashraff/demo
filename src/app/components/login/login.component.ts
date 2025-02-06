import {Component} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {AuthorizationService} from '../../services/authorization.service';
import {User} from '../list-user/user';

// Custom validator to check if email and confirm email match
function matchEmailValidator(formGroup: FormGroup) {
  const email = formGroup.get('email')?.value;
  const confirmEmail = formGroup.get('confirmEmail')?.value;

  if (email && confirmEmail && email !== confirmEmail) {
    formGroup.get('confirmEmail')?.setErrors({emailMismatch: true});
  } else {
    formGroup.get('confirmEmail')?.setErrors(null);
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  imports: [
    ReactiveFormsModule
  ],
  standalone: true,
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  private apiUrl = 'https://easyshop.free.beeceptor.com/login';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient,
    private service: AuthorizationService
  ) {
    this.loginForm = this.fb.group(
      {
        email: ['', [Validators.required, Validators.email]],
        confirmEmail: ['', [Validators.required, Validators.email]], // Added confirm email
        password: ['', [Validators.required, Validators.minLength(6)]]
      },
      {validators: matchEmailValidator} // Apply custom email match validator
    );

    // Listen to changes in confirmEmail and trigger validation
    this.loginForm.get('confirmEmail')?.valueChanges.subscribe(() => {
      this.loginForm.updateValueAndValidity();
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const formData = this.loginForm.value;

      this.http.post(this.apiUrl, formData).subscribe(
        response => {

          this.router.navigateByUrl('/');
        },
        error => {
          const user = new User();
          user.id = 101;
          user.name = "Aarif Ashraf";
          user.email = "aarif@gmail.com"

          this.service.setUser(user);
          this.router.navigateByUrl('/');
        }
      );
    }
  }
}
