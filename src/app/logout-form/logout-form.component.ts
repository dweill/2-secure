import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { ContentWrapperComponent } from '../content-wrapper/content-wrapper.component';

@Component({
  selector: 'app-logout-form',
  standalone: true,
  imports: [ContentWrapperComponent, MatButtonModule],
  templateUrl: './logout-form.component.html',
  styleUrl: './logout-form.component.scss',
})
export class LogoutFormComponent {
  constructor(private router: Router) {}

  login() {
    window.open(
      'https://www.youtube.com/watch?v=MvOE2ZwWrKE&pp=ygUJcGlnIHBpYW5v',
      '_blank'
    );
  }

  tryAgain() {
    window.open(
      'https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUYbmV2ZXIgZ29ubmEgZ2l2ZSB5b3UgdXAg',
      '_blank'
    );
  }

  deleteAccount() {
    this.router.navigate(['/login']);
  }
}
