# Mission Briefing

Today's mission is to validate characters in the timeline form for authorization and round out any more of the initial implementation details

## Mission Objectives

- implement input character checking functionality
- log users out on failed auth
- implement prank features

## Mission Plan

I'm thinking for the character checking that I will just check whatever the last character types was against my authorizations object, no need to check every character every time. One potential flaw I see with this approach is that it won't block copy pastes, but this might work as an advantage, because each message will be it's own key, and therefore, annoying. An alternate approach is to take the string entered, split it, make a set of it, and check every character in the set, every time a character is typed. The weakness of this approach is its scalability.

Thinking about it more, I don't know which approach I like better, so I may try them both!

For logging users out, I'll remove their user from the singleton service and route them to a 'logged out' form.

Prank details are classified.
