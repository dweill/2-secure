import { Component, Input } from '@angular/core';
import { TimelinePost } from '../types/timeline-post';

@Component({
  selector: 'app-timeline-post',
  standalone: true,
  imports: [],
  templateUrl: './timeline-post.component.html',
  styleUrl: './timeline-post.component.scss',
})
export class TimelinePostComponent {
  @Input() post: TimelinePost | undefined;
}
