'use strict';

require('dotenv').config();

const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 3000;

const LOG_FILE = path.join(__dirname, 'logs', 'events.log');

// Middleware
app.use(express.json());
app.use(express.static(__dirname));

// Create logs folder automatically
if (!fs.existsSync(path.join(__dirname, 'logs'))) {
    fs.mkdirSync(path.join(__dirname, 'logs'));
}

// Create log file
if (!fs.existsSync(LOG_FILE)) {
    fs.writeFileSync(LOG_FILE, '');
}

// Home Page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Save keyboard event
app.post('/log', (req, res) => {

    const { key, type, time } = req.body;

    const log =
        `[${time}] ${type} : ${key}\n`;

    fs.appendFileSync(LOG_FILE, log);

    res.json({
        success: true
    });

});

// Get Logs

app.get('/logs', (req, res) => {

    const data = fs.readFileSync(LOG_FILE, 'utf8');

    res.json({
        logs: data
    });

});

// Clear Logs

app.post('/clear', (req, res) => {

    fs.writeFileSync(LOG_FILE, '');

    res.json({
        success: true
    });

});

app.listen(PORT, () => {

    console.log("================================");

    console.log(`Keyboard Event Monitor`);

    console.log(`Running on http://localhost:${PORT}`);

    console.log("================================");

});
