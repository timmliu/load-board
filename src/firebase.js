const { useList, useListKeys, useListVals, useObject, useObjectVal } = require("react-firebase-hooks/database")
const firebase = require("firebase/app")
require("firebase/database")

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY || "AIzaSyCaQuffwJ_b8MOKQO8qvb3Wp-9LO1TYjIg",
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL || "https://load-board-c4eff.firebaseio.com/",
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID || "load-board-c4eff"
}
const app = firebase.initializeApp(config)
const db = firebase.database(app)

module.exports = {
  db, useList, useListKeys, useListVals, useObject, useObjectVal
}
