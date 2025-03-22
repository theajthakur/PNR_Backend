# PNR API

This project is a Node.js API for fetching PNR (Passenger Name Record) details. It uses Express for handling HTTP requests, Axios for making HTTP requests, and Tesseract.js for CAPTCHA recognition.

## Prerequisites

- Node.js
- npm (Node Package Manager)

## Installation

1. Clone the repository:

```sh
git clone https://github.com/yourusername/pnr-api.git
cd pnr-api
```

2. Install the dependencies:

```sh
npm install
```

3. Create a `.env` file in the root directory and add the following environment variables:

```env
PORT=3000
CAPTCHA_URL=https://example.com/captcha
PNR_URL=https://example.com/pnr
USER_AGENT=your-user-agent
ACCEPT=your-accept-header
REFERER=your-referer-header
```

## Usage

1. Start the server:

```sh
npm start
```

2. The API will be running on `http://localhost:3000`.

## API Endpoints

### Fetch PNR Details

- **URL:** `/`
- **Method:** `POST`
- **Request Body:**

```json
{
  "pnr": "your-pnr-number"
}
```

- **Response:**

```json
{
  "data": "PNR details"
}
```

## Project Structure

```
.
├── config
│   ├── PNRFinder.js
│   └── settings.js
├── routes
│   └── pnr.js
├── .env
├── .gitignore
├── index.js
├── package.json
└── README.md
```

## Dependencies

- [Express](https://expressjs.com/)
- [Axios](https://axios-http.com/)
- [Tesseract.js](https://tesseract.projectnaptha.com/)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [body-parser](https://www.npmjs.com/package/body-parser)

## License

This project is licensed under the MIT License.
