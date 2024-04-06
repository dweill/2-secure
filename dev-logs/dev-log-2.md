# Game plan

Thinking about the next step of what I want to do with this application, I want to implement the timeline functionality next. I plan to leverage my singleton service to hold my posts/comments/notes. The workflow here being that a user navigates to the timeline page after sign up / login and has an text input field and a submit button. The posts are then displayed underneath the input in their own little container.

I think I also want to try to integrate angular material for style points, and also because I think it will be the cleanest way to implement my auth logic in the next phase.

At this point, I'm thinking the shape of a timeline post will be as follows

```typescript
type TimelinePost = {
  postedDateTime: Date;
  text: string;
};
```

This will keep things simple for now and I don't need to worry about images. Because this app is entirely local and has no backend, I also don't need to worry about integrating other people's post, at least in this iteration of the project. Timeline will be shaped as follows

```typescript
type Timeline = {
  posts: TimelinePost[];
};
```
