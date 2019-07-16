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
- [React Firebase Hooks](https://github.com/CSFrequency/react-firebase-hooks)
- [Icons](https://fontawesome.com/cheatsheet?from=io)

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
