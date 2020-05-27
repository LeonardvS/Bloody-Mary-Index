# Bloody-Mary-Index

Finally, Bloody Mary lovers can find and rate the best Bloody Marys in town at all times!

Wikipedia: A Bloody Mary is a **cocktail** containing vodka, **tomato juice**, and other spices and flavorings including Worcestershire sauce, **hot sauces**, garlic, herbs, horseradish, celery, olives, salt, black pepper, lemon juice, lime juice or celery salt. In the United States, it is usually consumed in the **morning or early afternoon**, and is popular as a **hangover cure**.

## Screenshots
<div align='center'>
  <img src="assets/home.png" alt="user login" width="250" height="517">
  <img src="assets/BmRatingPage.png" alt="user event list" width="250">
</div>

<div align='center'>
  <img src="assets/BmMap.png" alt="user event confirmed" width="250">
  <img src="assets/personalBmPage.png" alt="user event confirmed" width="250">
</div>

## Run the app
<details>
<summary>Instructions</summary>

- **1. Get a Client ID and a Client Secret from Spotify**

   First of all we will need a Client ID and a Client Secret from Spotify if we want to be able to use their API.
   We will need a Spotify account to create an app on their developer's site, but the process is pretty straightforward          and it will not take more than 5 minutes.

   You can follow this tutorial: https://developer.spotify.com/documentation/general/guides/app-settings/#register-your-app

- **2. Create a database named 'ratelist' from the postgreSQL shell.**
- **3. Fork and clone the repository.**
- **4. Create a .env file in /server providing the information needed.**

    ```txt
    SPOTIFY_CLIENT_ID = 'copy client id here'
    SPOTIFY_CLIENT_SECRET = 'copy client secret here'
    SPOTIFY_REDIRECT_URI = 'http://localhost:3001/callback'

    PSQL_USER = 'user name'
    PSQL_PASSWORD = 'password'

    PORT = 'port'
    ```
- **5. Run "npm install" in /ratelist (root).**
- **6. Run "nodemon" in /server.**
- **7. Run "npm start" in /ratelist (root).**
</details>

## Tech-stack
* React Native
* Google maps API
* Expo
* Express
* Mongoose
* MongoDB

### Developer
Leonard Schilcher # [LinkedIn](https://www.linkedin.com/in/leonard-schilcher/)
