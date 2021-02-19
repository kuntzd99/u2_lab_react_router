# React Router Lab

## Overview

In this lab, you'll be utilizing React Router to create a multi page app. Two json files have been provided for you in the `src/data` folder. `React Router` has been installed in this project for you.

## Getting Started

- Fork and Clone
- `npm i` or `npm install`
- `npm start`

## Requirements

- You must have a page to display when your app loads. The `url` for this component should be `/`.
- You must have a page to display all games. The `url` for this component should be `/games`.
- You must have a page to display all genres. The `url` for this component should be `/genres`.
- You must have a page to display the details about a game. The `url` for this component should be `/games/:game_id`.
- Your app must be styled

## Instructions

1. Set up your `BrowserRouter` in the `index.js` file.
2. Create a `Home` component. This component can display anything you'd like.
3. Create a `Games` component. Load your `games.json` file into this component. Set up a `componentDidMount` and set the items inside of `games.json` to state.
   Map through your games in state and display them on the page.
4. Create a `GameDetails` component that has a more detailed view of a game. You'll want to capture the `id` in the url bar. Set up some state for this component that looks like the following:

   ```js
   this.state = {
       gameId: // should be the id in the url bar,
       game: null // Should be null to start and later becomes an object with the selected game.
   }
   ```

   - You'll want to access props in the `constructor` and get the `id` from react routers props
   - Add a `comonentDidMount` to this component. You should use a `higher order array method` to find a movie where the id matches what is in state. You may need to parse the id into an integer.
   - Display the selected movie in this component.

5. In `App.js`:
   - Import the provided `Nav` component.
   - Set up a `switch` for your routes.
   - Add in the routes for each page according to the requirements above.
6. Style your app! Create a `css` file in the `styles` folder.

## Resources

- [React Router Docs](https://reactrouter.com/web/guides/quick-start)
- [React Router Lesson](https://github.com/SEI-R-1-25/u2_lesson_react_router)
- [React Router Props](https://reactrouter.com/web/api/match)
