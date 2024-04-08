import { Injectable } from '@angular/core';
import { ActionAuthorization } from './types/action-authorization';
import { Timeline } from './types/timeline';
import { TimelinePost } from './types/timeline-post';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  username = '';
  password = '';
  timeline: Timeline = { posts: [] };
  authorizations: ActionAuthorization = {};
  constructor() {}

  addPost(post: TimelinePost): void {
    this.timeline.posts.unshift(post);
  }

  validateAuthorization(key: string): boolean {
    return this.authorizations[key]?.authorized;
  }

  authorizeAction(key: string): void {
    this.authorizations[key] = { authorized: true };
  }

  validateUsername(username: string): boolean {
    return this.username === username;
  }

  validatePassword(password: string): boolean {
    return this.password === password;
  }

  validateUsernameAndPassword(username: string, password: string): boolean {
    return this.validateUsername(username) && this.validatePassword(password);
  }

  logoutUser() {
    this.password = '';
    this.username = '';
    this.timeline = { posts: [] };
    this.authorizations = {};
  }
}
