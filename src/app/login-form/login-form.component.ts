import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StoreService } from '../store.service';
import { UserInfo } from '../types/user-info';
import { UserInfoFormComponent } from '../user-info-form/user-info-form.component';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [UserInfoFormComponent],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss',
})
export class LoginFormComponent {
  constructor(private store: StoreService, private router: Router) {}

  login(username: string, password: string): void {
    this.store.username = username;
    this.store.password = password;
    this.router.navigate(['/timeline']);
  }

  onSubmit(userInfo: UserInfo): void {
    const { username, password } = userInfo;
    this.login(username, password);
  }
}
