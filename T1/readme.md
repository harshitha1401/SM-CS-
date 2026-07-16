# 🔐 Text Encryption & Decryption using AES-256-CBC

A simple web application built with **Node.js**, **Express.js**, and Node's built-in **Crypto** module that allows users to securely encrypt and decrypt text using the AES-256-CBC symmetric encryption algorithm.

## 📌 Project Overview

This project demonstrates the implementation of cryptographic algorithms for securing text data. Users can enter plain text, encrypt it into ciphertext, and decrypt it back to the original message using the same secret encryption key.

A random Initialization Vector (IV) is generated for every encryption, ensuring that encrypting the same text multiple times produces different ciphertexts.

---

## 🚀 Features

- Encrypt plain text using AES-256-CBC
- Decrypt encrypted text back to its original form
- Random IV generation for every encryption
- Secure key storage using environment variables
- REST API for encryption and decryption
- Simple and responsive web interface
- Copy encrypted output to clipboard
- Clear input and output fields

---

## 🛠️ Technologies Used

### Backend
- Node.js
- Express.js
- Crypto Module
- Dotenv

### Frontend
- HTML5
- CSS3
- JavaScript

---

## 📂 Project Structure

```
Text-Encryption/
│
├── encryption.js        # Encryption and decryption functions
├── server.js            # Express server
├── package.json         # Project configuration
├── package-lock.json
├── .env                 # Secret encryption key
├── index.html           # User interface
├── style.css            # Styling
├── script.js            # Frontend logic
├── node_modules/
└── README.md
```

---

## ⚙️ Installation

### Clone the repository

```bash
git clone <repository-url>
cd Text-Encryption
```

### Install dependencies

```bash
npm install
```

### Create a `.env` file

```env
PORT=3000
const ENCRYPTION_KEY = process.env.ENCRYPTION_KEY;

> **Note:** The encryption key must be exactly **32 characters** long for AES-256.

---

## ▶️ Running the Project

Start the server:

```bash
npm start
```

The application will run at:

```
http://localhost:3000
```

---

## 📖 How to Use

### Encrypt Text

1. Enter plain text into the input field.
2. Click **Encrypt**.
3. The encrypted text appears in the output field.

### Decrypt Text

1. Copy the encrypted text.
2. Paste it into the input field.
3. Click **Decrypt**.
4. The original text is displayed in the output field.

---

## 🔒 Encryption Process

1. User enters plain text.
2. A random 16-byte Initialization Vector (IV) is generated.
3. AES-256-CBC encrypts the text using the secret key and IV.
4. The IV and encrypted text are combined and returned.

Output format:

```
IV:EncryptedText
```

Example:

```
e86c89fcd308559f71f2c3fe9a9c8464:607d9450f5dd0a8a7daf176bf8d5caf2
```

---

## 🔓 Decryption Process

1. Split the encrypted string into:
   - Initialization Vector (IV)
   - Ciphertext
2. Use the same encryption key.
3. Decrypt using AES-256-CBC.
4. Display the original plain text.

---

## 🔑 API Endpoints

### Encrypt

**POST**

```
/encrypt
```

Request

```json
{
    "text":"Hello World"
}
```

Response

```json
{
    "success": true,
    "original": "Hello World",
    "encrypted": "..."
}
```

---

### Decrypt

**POST**

```
/decrypt
```

Request

```json
{
    "text":"EncryptedText"
}
```

Response

```json
{
    "success": true,
    "decrypted":"Hello World"
}
```

---

## 📸 Application Workflow

```
User Input
      │
      ▼
 Encrypt Button
      │
      ▼
 AES-256-CBC Encryption
      │
      ▼
Encrypted Output
      │
      ▼
 Copy & Paste
      │
      ▼
 Decrypt Button
      │
      ▼
Original Text
```

---

## 🎯 Learning Outcomes

- Understanding symmetric encryption
- Working with the AES-256-CBC algorithm
- Using Initialization Vectors (IV)
- Secure key management using environment variables
- Building REST APIs with Express.js
- Connecting frontend and backend using Fetch API

---

## 📈 Future Improvements

- Password-based encryption using PBKDF2 or Scrypt
- File encryption support
- Drag-and-drop file upload
- Dark/Light mode
- Encryption history
- Download encrypted text as a file
- JWT authentication
- Docker deployment

---

## 👨‍💻 Author

Developed as a beginner cryptography project using Node.js and Express.js to understand secure encryption and decryption techniques.

---

## 📜 License

This project is for educational purposes.
