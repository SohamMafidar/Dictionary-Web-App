# About the Project

This project was built as a solution to Front End Mentor's [this](https://www.frontendmentor.io/challenges/dictionary-web-app-h5wwnyuKFL) challenge.

Project is built using React.js as frontend framework and uses vanilla CSS. With this web-app, user can ->

-   Search for any word & get it's definition, nouns, adjectives, verbs etc, depending upon Free Dictionary API's response.
-   Play the audio file for a word when it's available.
-   Switch between Serif, Monospace & Roboto fonts.
-   Switch between light and dark themes.
-   See hover and focus states for all interactive elements on the page.

  # Default State

![Default State](<Dictionary-App Default-State.JPG>)


  # Searched State  

![Searched State](<Dictionary-App Searched-State.JPG>)


  # Dark Theme

![Dark Theme](<Dictionary-App Dark-State.JPG>)


# Challenges

-   Working with an inconsistent API response

    -  One of the key hurdles involved deciphering an inconsistent API response structure. Notably, the audio file might intermittently appear as either the second or third key within an object. The situation further varied with multiple keys or, at times, no existence of any.
      
    -  Adding complexity, responses at times also comprised several objects, each housing distinct audio files, phonetic data, and parts of speech. 

    -   The API's slow response time also posed challenges, occasionally leading to delays or non-responsiveness.
    
-   Changing Themes & Fonts

    -   Entire website should reflect colors when theme is changed and font family when selected instantaneously and should not reload the page to create a user friendly experience.

-   Gracefully handling Errors
    -   When the data is being fetched by API, there should be a loading screen, if there is no data for a particular word, the UI should convey so.
    -   If the there is no audio file, user should know so.
    -   There should be only one verb, noun, adjective etc heading in case multiple objects are returned by the API.

# Learnings

-   How to make a loading screen
-   Work with APIs in React
-   Managing state changes and passing of state changes for the entire application
-   Working with audio in React
-   Working with various Hooks in React

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.
