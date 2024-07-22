# ActionCable Subscription Test Client

![Issues](https://img.shields.io/github/issues/patrick204nqh/actioncable-subscription-test-client)
![License](https://img.shields.io/github/license/patrick204nqh/actioncable-subscription-test-client)
![Last Commit](https://img.shields.io/github/last-commit/patrick204nqh/actioncable-subscription-test-client)
![Commit Activity](https://img.shields.io/github/commit-activity/m/patrick204nqh/actioncable-subscription-test-client)

## Introduction

This project demonstrates a simple client setup for testing real-time data updates using GraphQL subscriptions with Rails ActionCable.

## Prerequisites

- Node.js (v12 or later)
- npm or yarn

## Getting Started

### 1. Clone the Repository

```sh
git clone https://github.com/patrick204nqh/actioncable-subscription-test-client.git
cd actioncable-subscription-test-client
```

### 2. Install Dependencies

```sh
npm install
# or
yarn install
```

### 3. Setup Environment Variables

Copy the `.env.example` file to `.env`:

```sh
cp .env.example .env
```

Edit the `.env` file:

```env
REACT_APP_GRAPHQL_ENDPOINT=http://localhost:3000/graphql
REACT_APP_WS_ENDPOINT=ws://localhost:3000/cable
PORT=3001
BROWSER=none
```

### 4. Start the Development Server

```sh
npm start
# or
yarn start
```

## Usage

Open your browser and navigate to `http://localhost:3001`. Open the browser console to see real-time updates logged by the `TestComponent`.

## Demo

https://github.com/user-attachments/assets/47989175-13d4-481f-ad33-127999bc297a

## License

This project is licensed under the MIT License.

---

Happy coding ⚒️🚀
