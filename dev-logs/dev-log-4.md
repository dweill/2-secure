# Game Plan
Today's game plan is to implement the logic for blocking timeline submit until the user has successfully entered their username and password. I may if I have enough steam, implement the functionality for blocking key presses until each key is authorized.

My initial strategy for this is going to be to add an object `authorizations` to my singleton service. Each key will be a number representing a key code (for the keyboard) but the intial key will be the string `timelineSubmit`. The values associated with each key will be an object with a key authorized of type boolean.

```typescript
type Authorization = {
  authorized: boolean
}

type ActionAuthorization = {
  [key: string]: Authorization
}
```

The above is my intended plan. The reason I'm making the value of each key an Authorization object is because that will be more extensible later if I decide to go ahead and add timers to each authorization or any other key/value pair per keyboard key (that's a lot of key talk).

The workflow I'm imagining is after a user logs in, they are brought to the timeline page, where they will enter notes into their timeline. Initially, each key they press,(and submit click) will trigger a dialog to appear, which needs a valid username and password entered. If it's entered and valid, that action is 'authorized'. If the username and password are entered incorrectly, the user is logged out.

As I mentioned before, I'm intending to leverage angular material for the dialog.
