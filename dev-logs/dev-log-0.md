
# 2-Secure

In this first log, I'll talk about the broad idea I'm going for and what I suspect for my initial implementation. I'm doing this in Angular because it is the framework I have the most experience in and so hope to accomplish a lot quickly.

## The Idea

At a local meet up, we brought up the idea of annoyingly designed UIs and I had the idea that it would be really annoying if you had to enter your username and password for every action you took. So the initial implementation will be a simple form input and button for submitting notes that then render beneath the input creating a timeline. But, for every character you type and each submission, you will have to verify your auth by entering name and password.

## Taking it further
Additional hitches I'm ruminating on are timeouts for auth (so that you are only "authed" to press the 'a' key for example, for 3 minutes before needing to re-authenticate), or additionally, having to enter your password with one character being deliberately wrong. Additionally, locking users out if they get it wrong would also be annoying so I'd like to implement that and maybe pull a little prank in the process.
