'use strict';

require('dotenv').config();

const express = require('express');
const path = require('path');
const { encrypt, decrypt } = require('./encryption');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files
app.use(express.static(__dirname));

// Home Page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Encrypt API
app.post('/encrypt', (req, res) => {
    try {
        const { text } = req.body;

        if (!text) {
            return res.status(400).json({
                success: false,
                message: 'Text is required.'
            });
        }

        const encryptedText = encrypt(text);

        res.json({
            success: true,
            original: text,
            encrypted: encryptedText
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
});

// Decrypt API
app.post('/decrypt', (req, res) => {
    try {
        const { text } = req.body;

        if (!text) {
            return res.status(400).json({
                success: false,
                message: 'Encrypted text is required.'
            });
        }

        const decryptedText = decrypt(text);

        res.json({
            success: true,
            encrypted: text,
            decrypted: decryptedText
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Invalid encrypted text.',
            error: error.message
        });
    }
});

// Start Server
app.listen(PORT, () => {
    console.log(`==================================`);
    console.log(`Text Encryption Server Running`);
    console.log(`http://localhost:${PORT}`);
    console.log(`==================================`);
});
