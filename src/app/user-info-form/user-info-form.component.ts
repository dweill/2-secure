import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { ContentWrapperComponent } from '../content-wrapper/content-wrapper.component';
import { CustomValidators } from '../custom-validators/whitespace-validator';
import { UserInfo } from '../types/user-info';

@Component({
  selector: 'app-user-info-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    ContentWrapperComponent,
    MatButtonModule,
    MatInputModule,
  ],
  templateUrl: './user-info-form.component.html',
  styleUrl: './user-info-form.component.scss',
})
export class UserInfoFormComponent {
  @Input() submitText = 'Submit';

  @Output() submitClicked = new EventEmitter<UserInfo>();

  form = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      CustomValidators.whitespaceValidator,
    ]),
    password: new FormControl('', [
      Validators.required,
      CustomValidators.whitespaceValidator,
    ]),
  });

  submit() {
    if (this.form.valid) {
      const { username, password } = this.form.value;
      if (username && password) {
        this.submitClicked.emit({ username, password });
      }
    }
  }
}
