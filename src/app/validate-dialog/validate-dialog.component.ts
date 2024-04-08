import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { UserInfo } from '../types/user-info';
import { UserInfoFormComponent } from '../user-info-form/user-info-form.component';

@Component({
  selector: 'app-validate-dialog',
  standalone: true,
  imports: [UserInfoFormComponent],
  templateUrl: './validate-dialog.component.html',
  styleUrl: './validate-dialog.component.scss',
})
export class ValidateDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<ValidateDialogComponent, UserInfo>
  ) {}

  submit(username: string, password: string): void {
    this.dialogRef.close({ username, password });
  }

  onSubmit(userInfo: UserInfo): void {
    const { username, password } = userInfo;
    this.submit(username, password);
  }
}
