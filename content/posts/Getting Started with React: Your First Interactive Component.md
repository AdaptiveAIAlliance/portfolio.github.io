---
title: "Getting Started with React: Your First Interactive Component"
date: "2025-04-10"
tags:
  - react
  - tutorial
  - beginner
  - getting started
  - component
  - jsx
  - state
  - interactive
  - frontend
  - web development

categories:
  - Web Development
  - JavaScript
  - React
  - Tutorials
featImage: "Getting Started with React: Your First Interactive Component.jpg"
alt: "Blue atom"
author: "john Due"
authorImage: "/AAA_profile_pic.png"
intro: "Welcome to the exciting world of React! This tutorial will guide you through the very basics of React, helping you create your first interactive component. "
---

Welcome to the exciting world of React! This tutorial will guide you through the very basics of React, helping you create your first interactive component. Don't worry if you're new to this – we'll take it step by step.

## What is React?

React is a popular JavaScript library for building user interfaces (UIs) or UI components. It allows developers to create interactive and dynamic web applications efficiently. Key concepts in React include:

- **Components:** Reusable and independent building blocks of your UI.
- **JSX:** A syntax extension to JavaScript that allows you to write HTML-like structures within your JavaScript code.
- **Virtual DOM:** React uses a virtual representation of the actual DOM (Document Object Model), making updates faster and more efficient.
- **Declarative Programming:** You describe what your UI should look like, and React takes care of updating the DOM to match that description.

## Prerequisites

Before we begin, make sure you have the following installed on your system:

- **Node.js:** React relies on Node.js and npm (Node Package Manager) or yarn for managing dependencies. You can download it from [https://nodejs.org/](https://nodejs.org/).
- **npm or yarn:** These package managers come bundled with Node.js.

## Setting Up Your First React Project

We'll use Create React App, a convenient tool for setting up a new React project with a basic structure.

1.  **Open your terminal or command prompt.**
2.  **Navigate to the directory where you want to create your project.**
3.  **Run the following command:**

    ```bash
    npx create-react-app my-first-react-app
    ```

    (Replace `my-first-react-app` with your desired project name.)

    This command will create a new folder with all the necessary files and dependencies for your React application.

4.  **Once the process is complete, navigate into your project directory:**

    ```bash
    cd my-first-react-app
    ```

5.  **Start the development server:**

    ```bash
    npm start
    # or
    yarn start
    ```

    This command will build your React application and open it in your default web browser (usually at `http://localhost:3000`). You should see the default React welcome page.

## Creating Your First Component

Now, let's create our own simple component.

1.  **Open the `src` folder in your project directory.**
2.  **Create a new file named `Greeting.js` (or `greeting.jsx` if you prefer).**
3.  **Add the following code to `Greeting.js`:**

    ```javascript
    import React from "react";

    function Greeting(props) {
      return (
        <div>
          <h1>Hello, {props.name}!</h1>
          <p>Welcome to your first React component.</p>
        </div>
      );
    }

    export default Greeting;
    ```

    Let's break down this code:

    - `import React from 'react';`: This line imports the React library, which is essential for creating React components.
    - `function Greeting(props) { ... }`: This defines a functional component named `Greeting`. It accepts an argument called `props` (short for properties), which is an object containing data passed down from parent components.
    - `return (...)`: The `return` statement specifies what this component should render. We're using JSX here.
    - `<div>`, `<h1>`, `<p>`: These are HTML-like elements within our JSX.
    - `{props.name}`: This is how you embed JavaScript expressions within JSX. Here, we're displaying the value of the `name` property passed to the `Greeting` component.
    - `export default Greeting;`: This line makes the `Greeting` component available for use in other parts of your application.

## Using Your Component

Now, let's use our `Greeting` component in the main application.

1.  **Open the `src/App.js` file.**
2.  **Modify the code to look like this:**

    ```javascript
    import React from "react";
    import Greeting from "./Greeting"; // Import our Greeting component
    import "./App.css";

    function App() {
      return (
        <div className="App">
          <header className="App-header">
            <Greeting name="Alice" /> {/* Using the Greeting component */}
            <Greeting name="Bob" /> {/* Using it again with a different prop */}
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="[https://reactjs.org](https://reactjs.org)"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
      );
    }

    export default App;
    ```

    Key changes:

    - `import Greeting from './Greeting';`: We import the `Greeting` component we created.
    - `<Greeting name="Alice" />`: We use the `Greeting` component within the `App` component. We're passing a `name` property with the value "Alice".
    - `<Greeting name="Bob" />`: We use the `Greeting` component again, this time passing the `name` property with the value "Bob".

3.  **Save the `App.js` file.**

    Your browser should automatically reload, and you should now see "Hello, Alice!" and "Hello, Bob!" displayed on the page.

## Making it Interactive: Adding State

Let's make our component a bit more interactive by adding state. State allows components to manage and update their own data.

1.  **Open `src/Greeting.js` again.**
2.  **Modify the code to use the `useState` hook:**

    ```javascript
    import React, { useState } from "react";

    function Greeting(props) {
      const [isGreeting, setIsGreeting] = useState(true);

      const toggleGreeting = () => {
        setIsGreeting(!isGreeting);
      };

      return (
        <div>
          <h1>
            {isGreeting ? `Hello, ${props.name}!` : `Goodbye, ${props.name}!`}
          </h1>
          <p>Welcome to your first interactive React component.</p>
          <button onClick={toggleGreeting}>
            {isGreeting ? "Say Goodbye" : "Say Hello"}
          </button>
        </div>
      );
    }

    export default Greeting;
    ```

    Let's understand the changes:

    - `import React, { useState } from 'react';`: We import the `useState` hook from the React library.
    - `const [isGreeting, setIsGreeting] = useState(true);`: This line declares a state variable named `isGreeting` and a function to update it named `setIsGreeting`. `useState(true)` initializes the `isGreeting` state to `true`.
    - `const toggleGreeting = () => { setIsGreeting(!isGreeting); };`: This defines a function that updates the `isGreeting` state to its opposite value.
    - `<h1>{isGreeting ? ... : ... }</h1>`: We use a conditional (ternary) operator to display either "Hello" or "Goodbye" based on the `isGreeting` state.
    - `<button onClick={toggleGreeting}> ... </button>`: We add a button. When this button is clicked, the `toggleGreeting` function will be executed, updating the `isGreeting` state and causing the component to re-render with the new greeting.

3.  **Save the `Greeting.js` file.**

Now, when you refresh your browser, you'll see a button next to each greeting. Clicking the button will toggle the greeting between "Hello" and "Goodbye".

## Congratulations!

You've successfully created your first interactive React component! This is just the beginning of your journey with React. As you continue learning, you'll explore more advanced concepts like handling events, managing complex state, working with APIs, and building more intricate user interfaces.

Keep practicing and exploring the official React documentation ([https://react.dev/](https://react.dev/)) to deepen your understanding. Happy coding!
