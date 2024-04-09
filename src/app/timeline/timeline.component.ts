import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialog,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { Subject, take, takeUntil } from 'rxjs';
import { ContentWrapperComponent } from '../content-wrapper/content-wrapper.component';
import { CustomValidators } from '../custom-validators/whitespace-validator';
import { StoreService } from '../store.service';
import { TimelinePostComponent } from '../timeline-post/timeline-post.component';
import { Timeline } from '../types/timeline';
import { TimelinePost } from '../types/timeline-post';
import { UserInfo } from '../types/user-info';
import { ValidateDialogComponent } from '../validate-dialog/validate-dialog.component';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    ContentWrapperComponent,
    TimelinePostComponent,
    MatButtonModule,
    MatInputModule,
    MatDialogModule,
  ],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss',
})
export class TimelineComponent {
  form = new FormGroup({
    post: new FormControl('', [
      Validators.required,
      CustomValidators.whitespaceValidator,
    ]),
  });
  timeline: Timeline | undefined;

  private onDestroySubject = new Subject<void>();

  constructor(
    private storeService: StoreService,
    private dialog: MatDialog,
    private router: Router
  ) {
    this.timeline = storeService.timeline;
    this.form
      ?.get('post')
      ?.valueChanges.pipe(takeUntil(this.onDestroySubject))
      .subscribe((value) => {
        const chars = value?.split('');
        const charSet = new Set(chars);
        const uniqueChars = Array.from(charSet);
        const invalidChars = uniqueChars.filter(
          (uniqueChar) => !this.storeService.validateAuthorization(uniqueChar)
        );
        if (invalidChars.length) {
          invalidChars.forEach((invalidChar) => {
            this.checkCharacterAuth(invalidChar);
          });
        }
      });
  }

  ngOnDestroy(): void {
    this.onDestroySubject.next();
    this.onDestroySubject.complete();
  }

  submitPost(validated?: boolean) {
    if (!this.form.valid) {
      return;
    }
    const valid = validated;
    const postValue = this.form.value.post?.trim();
    if (valid && postValue) {
      this.post(postValue);
    } else {
      this.validateSubmit();
    }
  }

  post(text: string) {
    const post: TimelinePost = {
      postedDateTime: new Date().toLocaleString(),
      text,
    };
    this.storeService.addPost(post);
    this.form.reset();
  }

  checkCharacterAuth(character: string) {
    const dialogRef = this.getDialogRef();

    dialogRef
      .afterClosed()
      .pipe(take(1))
      .subscribe((result) => {
        const valid = this.handleAuthResult(result);
        if (valid) {
          this.storeService.authorizeAction(character);
        } else {
          this.logout();
        }
      });
  }

  validateSubmit(): void {
    const dialogRef = this.getDialogRef();

    dialogRef
      .afterClosed()
      .pipe(take(1))
      .subscribe((result) => {
        const valid = this.handleAuthResult(result);
        if (valid) {
          this.submitPost(true);
        } else {
          this.logout();
        }
      });
  }

  handleAuthResult(userInfo: UserInfo | undefined): boolean {
    if (userInfo?.username && userInfo.password) {
      return this.storeService.validateUsernameAndPassword(
        userInfo?.username,
        userInfo?.password
      );
    }
    return false;
  }

  private logout() {
    this.storeService.logoutUser();
    this.router.navigate(['/logout']);
  }

  private getDialogRef(): MatDialogRef<ValidateDialogComponent, UserInfo> {
    return this.dialog.open<ValidateDialogComponent, void, UserInfo>(
      ValidateDialogComponent,
      { disableClose: true }
    );
  }
}
