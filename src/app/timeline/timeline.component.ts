import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { take } from 'rxjs';
import { ContentWrapperComponent } from '../content-wrapper/content-wrapper.component';
import { CustomValidators } from '../custom-validators/whitespace-validator';
import { StoreService } from '../store.service';
import { TimelinePostComponent } from '../timeline-post/timeline-post.component';
import { Timeline } from '../types/timeline';
import { TimelinePost } from '../types/timeline-post';
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

  constructor(private storeService: StoreService, private dialog: MatDialog) {
    this.timeline = storeService.timeline;
  }

  submitPost() {
    if (!this.form.valid) {
      return;
    }
    const valid = this.storeService.validateAuthorization('timelineSubmit');
    const postValue = this.form.value.post?.trim();
    if (valid && postValue) {
      this.post(postValue);
    } else {
      this.openDialog();
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

  openDialog(): void {
    const dialogRef = this.dialog.open<
      ValidateDialogComponent,
      void,
      { username: string; password: string }
    >(ValidateDialogComponent, { disableClose: true });

    dialogRef
      .afterClosed()
      .pipe(take(1))
      .subscribe((result) => {
        if (result?.username && result.password) {
          const valid = this.storeService.validateUsernameAndPassword(
            result?.username,
            result?.password
          );
          if (valid) {
            this.storeService.authorizeAction('timelineSubmit');
            this.submitPost();
          }
        }
      });
  }
}
