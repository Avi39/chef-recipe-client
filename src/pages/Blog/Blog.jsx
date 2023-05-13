/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Container } from 'react-bootstrap';

const Blog = () => {
    return (
        <Container className='mt-5 mb-5'>
            <h3>1. Tell us the differences between uncontrolled and controlled components?</h3>
            <p>Ans:In React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally. </p>
            <p></p>
            <h3>2. How to validate React props using PropTypes?</h3>
            <p>ans: To validate React props using PropTypes, we need to import the PropTypes library, add a propTypes property to your component's class, define the PropTypes for each prop we want to validate, and use PropTypes to validate the props being passed to our component. PropTypes provide a way to validate the type and shape of data being passed down to React components as props. It helps to catch errors early in the development process and ensure that our components are being used correctly.</p>
            <h3>3. Tell us the difference between nodejs and express js?</h3>
            <p>ans: Node.js is a JavaScript runtime built on the V8 JavaScript engine that allows developers to run JavaScript code on the server-side. Express.js is a web application framework built on top of Node.js that simplifies the process of handling HTTP requests, routing, and middleware in your web applications. In short, Node.js provides a platform for building server-side applications, and Express.js provides a set of tools and utilities for building web applications and APIs on top of Node.js.</p>
            <h4>4. What is a custom hook, and why will you create a custom hook?</h4>
            <p>ans: A custom hook is a JavaScript function that uses React's built-in hooks to encapsulate and reuse a specific piece of functionality or stateful logic in a React application. We might create a custom hook to reuse code, encapsulate logic, abstract away implementation details, or improve readability. Custom hooks improve the maintainability and organization of our code and make it easier to manage complex stateful logic in our React components.</p>
            <p>we would create a custom hook in a React application for the following reasons:
                <br />
                Reusability: If we find myself duplicating code across multiple components, we can extract that code into a custom hook and reuse it across all of those components.
                <br />
                Encapsulation: we can encapsulate complex logic or stateful behavior that is needed across multiple components in a single custom hook, making it easier to manage and maintain.
                <br />
                Abstraction: we can abstract away implementation details, making it easier to change or update the underlying implementation without affecting the components that use the hook.
                <br />
                Readability: we can use custom hooks to improve the readability and organization of our code, by separating concerns and keeping related code together in a single hook.
                <br />
                Overall, creating a custom hook can improve the maintainability, reusability, and readability of our code, making it easier to build and maintain complex React applications.</p>
        </Container>
    );
};

export default Blog;