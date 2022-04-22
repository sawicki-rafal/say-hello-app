# slack-bot-pov

## POC of slack bot

https://github.com/sawicki-rafal/slack-bot-poc

## App prerequisites

First thing’s first: before you start app, you’ll want to setup slack bot.

To run app you need [node.js](https://nodejs.org/en/) (at least v15).

## App startup

### Installation

Open a command line (or terminal) and navigate to the folder where you have the project files then run:

```
npm install
```

### Running bot

One can run the application by issuing the following command:

```
npm run start
```


## Configure

You have to change:

```js
const messagesUrl = 'http://localhost:8081/slack/messages/';
```

to correspond to url of your bot app.

## Application

Application on default runs on **http://localhost:3001/**.



