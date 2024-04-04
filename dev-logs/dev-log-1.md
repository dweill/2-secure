## Progress Report

The progress I made in this dev log includes the initial router guard logic so that attempting to navigate to the timeline router redirects to the login route. I included a singleton service to save username and password (this should save me from having to include ngrx or something).

I also have my username and password form in it's most bare state (very ugly but functional)

![image](../dev-log-assets/initial-login-form.png)

Finally I modified the ng test script to run in headless mode.
