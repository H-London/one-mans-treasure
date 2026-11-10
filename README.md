# One Man's Treasure

Community item redistribution platform enabling users to list unwanted household goods and coordinate peer-to-peer claims without monetary exchange.

*(2018 engineering archive)*

## Stack

- Frontend: React, Redux, Redux-Promise, Semantic-UI, Webpack, Babel (ES6+)
- Backend and Database: Node.js, Express, MongoDB
- Third-Party APIs: Google Maps API (geocoding and mapping), Imgur API (asset hosting)

## Environment Configuration

Create a `.env` file in the project root with the following variables before starting the server:

- `GOOGLE_MAPS_API_KEY` - Google Maps platform API key
- `IMGUR_CLIENT_ID` - Imgur application client ID

## Getting Started

Install dependencies:

```sh
npm install
```

Compile client bundle in watch mode:

```sh
npm run react-dev
```

Start Express service:

```sh
npm run start
```

## Contributors

Hesh London | John Webb | Mealear Kheiv | Erwin Carrasquilla
