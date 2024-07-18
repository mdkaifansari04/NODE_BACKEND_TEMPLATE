Got it! Here's the updated README with the new folder structure:

---

# Node.js Backend Template

This is a simple and scalable Node.js backend template designed to kickstart your project. It includes basic setup and common middleware, written in TypeScript.

## Features

- Basic Express server setup
- Environment variable configuration
- Essential middleware integration (e.g., compression, cors, helmet, morgan)
- TypeScript support
- Jest for testing
- Prettier for code formatting
- Structured folder layout for scalability

## Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [npm](https://www.npmjs.com/)

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/mdkaifansari04/NODE_BACKEND_TEMPLATE.git
   ```
2. Navigate to the project directory:
   ```sh
   cd your-repo-name
   ```
3. Install dependencies:
   ```sh
   npm install
   ```

## Usage

1. Start the development server:
   ```sh
   npm run dev
   ```
2. Start the production server:
   ```sh
   npm start
   ```
3. The server will be running at:
   ```sh
   http://localhost:5000
   ```

## Running Tests

To run tests:
```sh
npm test
```

To run tests in watch mode:
```sh
npm run test:watch
```

To check test coverage:
```sh
npm run test:coverage
```

## Formatting Code

To format the code with Prettier:
```sh
npm run format
```

## Project Structure

```
your-repo-name/
├── node_modules/
├── src/
│   ├── api/
│   │   └── v1/
│   │       ├── controllers/
│   │       ├── models/
│   │       └── routes/
│   ├── helpers/
│   ├── middleware/
│   ├── types/
│   ├── validation/
│   └── app.ts
├── .env
├── .gitignore
├── jest.config.js
├── package.json
├── tsconfig.json
├── README.md
└── ... (additional files)
```

## Contributing

Contributions are welcome! Please fork the repository and create a pull request.

## License

This project is licensed under the ISC License.
