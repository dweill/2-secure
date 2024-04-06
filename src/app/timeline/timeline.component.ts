import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { ContentWrapperComponent } from '../content-wrapper/content-wrapper.component';
import { StoreService } from '../store.service';
import { TimelinePostComponent } from '../timeline-post/timeline-post.component';
import { TimelinePost } from '../types/timeline-post';

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
  ],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss',
})
export class TimelineComponent {
  form = new FormGroup({ post: new FormControl('') });
  timeline;

  constructor(private storeService: StoreService) {
    this.timeline = storeService.timeline;
  }

  submitPost() {
    const postValue = this.form.value.post?.trim();
    if (!postValue) {
      alert('Post something...');
      return;
    }
    const post: TimelinePost = {
      postedDateTime: new Date().toLocaleString(),
      text: postValue,
    };
    this.storeService.addPost(post);
    this.form.reset();
  }
}
