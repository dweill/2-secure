import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { ContentWrapperComponent } from '../content-wrapper/content-wrapper.component';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    ContentWrapperComponent,
    MatButtonModule,
    MatInputModule,
  ],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss',
})
export class LoginFormComponent {
  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private store: StoreService, private router: Router) {}

  login() {
    const username = this.loginForm.value.username?.trim();
    const password = this.loginForm.value.password?.trim();

    if (username && password) {
      this.store.username = username;
      this.store.password = password;
      this.router.navigate(['/timeline']);
    } else {
      alert('Please enter a username and password');
    }
  }
}
