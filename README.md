# Google Fellowship React Router DOM Project

This project is a basic React application demonstrating the use of `react-router-dom` for client-side routing. It provides a simple structure for navigating between different pages within a single-page application (SPA). This project was created as part of the Google Fellowship program to showcase understanding of React routing concepts.

## Features

*   **Client-Side Routing:** Uses `react-router-dom` to navigate between different components without full page reloads.
*   **Route Definition:** Defines routes for Home, Products, Cart, and a NotFound page.
*   **Layout Component:** Implements a layout component with a Navbar that is conditionally rendered.
*   **Dynamic Routing:** Demonstrates dynamic routing with a SingleProduct page that displays a product ID from the URL.
*   **Basic Page Structure:** Provides a basic structure for building a more complex React application.

## Technologies Used

*   **JavaScript:** The primary programming language.
*   **React:** A JavaScript library for building user interfaces.
*   **React Router DOM:** A library for handling routing in React applications.
*   **Vite:** A build tool for modern web development.
*   **ESLint:** A linter for identifying and reporting on patterns found in ECMAScript/JavaScript code.

## Installation

Follow these steps to set up the project locally:

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/zohaibsaeed117/Google-Fellowship-React-Router-Dom.git
    ```

2.  **Navigate to the project directory:**

    ```bash
    cd Google-Fellowship-React-Router-Dom
    ```

3.  **Install dependencies:**

    ```bash
    npm install
    ```

## Usage

1.  **Start the development server:**

    ```bash
    npm run dev
    ```

    This will start the Vite development server, and you can access the application in your browser at the address provided (usually `http://localhost:5173`).

2.  **Build the project for production:**

    ```bash
    npm run build
    ```

    This will create a `dist` directory containing the production-ready build of the application.

3.  **Preview the production build:**

    ```bash
    npm run preview
    ```

    This will serve the production build locally for testing.

## Project Structure

The project structure is organized as follows:

```
Google-Fellowship-React-Router-Dom/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   └── Navbar.jsx
│   ├── pages/
│   │   ├── Cart.jsx
│   │   ├── Home.jsx
│   │   ├── Layout.jsx
│   │   ├── NotFound.jsx
│   │   ├── Products.jsx
│   │   └── SingleProduct.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── vite-env.d.ts
├── .eslintrc.cjs
├── .gitignore
├── index.html
├── package.json
├── README.md
├── vite.config.js
└── eslint.config.js
```

*   `src/components`: Contains reusable React components, such as the `Navbar`.
*   `src/pages`: Contains React components representing different pages of the application (Home, Products, Cart, NotFound, SingleProduct, Layout).
*   `src/App.jsx`: The main application component that defines the routing structure.
*   `src/main.jsx`: The entry point for the React application.
*   `index.html`: The main HTML file that hosts the React application.
*   `vite.config.js`: Configuration file for Vite.
*   `package.json`: Contains project metadata and dependencies.
*   `README.md`: This file, providing information about the project.

## Contributing

Contributions are welcome! Here's how you can contribute to this project:

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Make your changes and commit them with descriptive messages.
4.  Push your changes to your fork.
5.  Submit a pull request to the main repository.

Please ensure your code adheres to the project's coding standards and includes appropriate tests.

## License

This project is licensed under the [MIT License](LICENSE).
