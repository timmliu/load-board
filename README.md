# Load Board

This is a load board with a list view, detailed view, and pub-sub ui updates.

## Setup and run
1. clone repo
1. cd into project directory
1. `yarn`
1. `yarn start`
1. Development server should load automatically, if not visit: http://localhost:3000/

## Process
1. Read over specs/requirements
1. [Considerations](#considerations)
1. Decide on stack (React, Firebase)
1. Mock user flow and interface in Sketch
1. Setup db and insert data
1. Get data / render data to page
1. Add dependencies such as icons, fonts
1. Decide on basic component distinctions such as Header, LoadList, Load (list item), LoadDetailed (modal)
1. Build from parent components down to child components
1. Add utils and constants as needed
1. Test according to specs/requirements, fix bugs and improve functionality

## Considerations
[considerations]: "Considerations"
1. What is the goal / desired outcomes of user?
1. User types/segments: are there different types of users that will be using this?
1. Scale: How many loads could there be? How many loads need to be visible at one time?
1. Performance: How quickly do the loads need to show up in the UI? Paging?
1. Search capabilities?
1. How to better handle enumerable type (e.g. status: available/booked)?

## Next Steps
- Auth/Security
- Search?
- …

## Resources
[React Firebase Hooks](https://github.com/CSFrequency/react-firebase-hooks)
[Icons](https://fontawesome.com/cheatsheet?from=io)

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
