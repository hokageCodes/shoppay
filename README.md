# Fullstack E-commerce Web Application
### MERN stack with NextJs, Redux and Next Auth, Css in JS with CSS Modules mixed with Sass 


## Build Process
### Setting Up
Hajime!
- Created Next App, Cleaned up, and Reset CSS global styles.
- Created Database with MongoDB compass and did the connecting and Disconnecting to the DB functionality.
- Set Up Redux, Redux toolkit, and Redux persisit!
- Made global variables accessible in next config.

### Header Component
- Ad Banner at the top of the Page
- Navigation (Top) Header and Links Added.
- Top Menu -> Added state for if user is signed in or not, and also the links under the user's account.
- Worked on showing the user account state based on if user is logged in or not (No auth yet).
- Added and styled the Logo, search field, and the cart option(cart length created in and gotten from redux store).

### Footer Component
- Added main footer links
- Added footer socials and Newsletter input (News1letter isn't functional yet)
- Added Payment and copyright UI
- Responsive Footer

### Location Detection
- Used [THIS API](https://ipregistry.co/) for location detection on the site. Whatever country a user is visiting the site from is going to show accordingly. k'naa mean?

### Authentication using Next-auth
- Installed [next-auth ](https://next-auth.js.org/), and did a test with the provided data in the docs to make sure it works first.
- JSON webToken and MongoDB adapter for registering a user to the DB, and controlling and managing sessions.
- Created OAuth for Github and Google.
- Reroute user to homepage after signup or signin. Also login and signout buttons are functional too using next/auth signIn and SignOut buit in functions.
- Setup and Implemented [ auth0 ](https://auth0.com/) authentification.
- Started work on the signin section. 
- Installed Formik and Yup for the form and error validation, and using tooltips to display the error on the input.
- Added and styled Sign in button to project. Not functional yet.
- Added social (OAuth) links to the signin section so users can sign in with ease.
- Worked on signin component with the necessary frontend validations for users.
- Worked on signup component with the necessary frontend validations for users.. All of these aren't functional yet in the case of actually registering or signing into the web application.
- Validating the sign up form with Yup. Also created a "user model" for users signing up newly, and for existing users.
- Created models for User signup
- Created email validations, added JWT, RegEx, and encryption(bcrypt) to the webapp
- Used [Google Cloud Console](console.cloud.google.com) and [Google's oAuth2 Playground](https://developers.google.com/oauthplayground) for email validation on signup. I also used [stripo](https://stripo.email) for free email templates to send to users upon sign up, to validate their emails. You know, the regular convention. Maad ting yeah?
- Signup with email done and working (i dont receive email link yet tho). Also, Loading, Success and Error state created for sign up, and on successful signup, user is redirected to the home page.
- Sign-In with registered email and password is working. Error handled properly for unregistered emails or invalid input.
- Refactored to use callbacks in the authentication.
-  Using csrfToken redirect so that users can get logged back in to their last point. Also the authentication page to be a protected route - When a user is already signed in, they cannot access the page.

### Forgot, Reset Password
- Created the UI for the forgot password and reset page
- Created the logic for the forgot password and users can get a template email, with link to reset their password.
- AUTH DONE!!!


### Home Page
- Homepage Boilerplate setup
- Swiper for the homepage "Hero section" carousel using [swiper js](https://swiperjs.com), and added respective images that are being mapped to the carousel.