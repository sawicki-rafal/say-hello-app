const express = require('express');
const axios = require('axios').default;

const APP_PORT = process.env.PORT || 3001;

const app = express();
app.use(express.json())

const messagesUrl = 'http://localhost:8081/slack/messages/';

app.post('/', (req, res) => {
    const event = req.body;
    if (event.type && event.type === 'message' && event.text.startsWith("!hello")) {
        axios.post(messagesUrl, {}, {
            params: {
                id: 'say-hello-app',
                message: 'Hello! How are you?',
                channel: 'general'
            }
        });
    }
    res.send('');
})

app.listen(APP_PORT, () => {
    console.log("Server is up and running on port: ", APP_PORT);
})