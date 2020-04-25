# Udacity Flashcard App
This is was fully built and tested for `android` platform only. This project postulates the use of React Native to create an app that store flashcard with the ability to also take quizs. The projects shows the use of React, Component, React Navigation, React States, Functional Components, React props, Redux etc.

## Installation

Clone the repository, change directories, and use NPM/Yarn to install the dependencies.

```bash
$ git clone https://github.com/developersunesis/udacicards
$ cd udacicards
$ yarn install
```

## Get Started

To get started, clone/pull the project and then:

* install all project dependencies with `yarn install`
* run app on your device or emulator with `yarn android`

## Source Files
```bash
── src
    ├── actions # Contains all the actions needed for the redux operations
        ├── index.js
        
    ├── App.js # This is the root of your app. Contains static HTML right now and the Navigator.
    ── components # all dom components and static html contents are provided in this folder
        ├── AddCard.js
        ├── AddDeck.js
        ├── BottomNavigation.js
        ├── DeckItem.js
        ├── DeckView.js
        ├── Main.js
        ├── QuestionItem.js
        ├── TakeQuiz.js
        ├── TheButton.js
    ├── reducers # contains our pure functions to update our store
        ├── index.js
    ├── utils # Contains the api calls required for the app
        ├── _DATA.js
        ├── API.js
        ├── colors.js
```

The `_DATA.js` file represents a fake database and methods that let you access the data. All datas in this file are stored in `AsyncStorage`.

## Data

There are two types of objects stored in our database:

### Deck

Questions include:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| title                  | String | The question’s unique identifier |
| questions        | Array | The deck's flash cards |
| question | String | The question|
| answer | String | The answer|
