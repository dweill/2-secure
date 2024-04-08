# Progress Report

During this coding session I implemented the authorization check logic for initial timeline post submit. I think I'd like to modify it to check every time, but I'm not concerned with that at the moment. A lot of what I did was refactoring to make things more dry.

## Components Added

- user-info-form (the login form I was already using, refactored to be more reusable)
- validate-dialog (a container for the user-info-form when validating username and password against each other)

## Plan Vs Execution

I made and used the two types I mentioned in my previous game plan log (`Authorization` and `ActionAuthorization`) and I made a third type to encapsulate username and password (`UserInfo`).

I found myself repeating a lot of the form logic between the initial login form and the validation form, so I broke it out into a separate view component, and kept the bulk of the business logic in the login-form.component and validate-dialog.component.

I added a custom trim validator to make the forms invalid if a user tries to be cheeky and put in only whitespace.

One thing I forgot about until writing this is that I didn't handle the case where a user gets their password or username wrong, other than blocking the post. I could handle it by giving them 1 or more extra chances, but I think I may just do the log out with an error message next time.
