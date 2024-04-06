import { Injectable } from '@angular/core';
import { Timeline } from './types/timeline';
import { TimelinePost } from './types/timeline-post';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  username = '';
  password = '';
  timeline: Timeline = { posts: [] };
  constructor() {}

  addPost(post: TimelinePost): void {
    this.timeline.posts.unshift(post);
  }
}
