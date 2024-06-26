### List of things I learnt during the course of this project
1. **Difference between onClick in HTML vs JSX -** Events are written in lowercase, e.g. onclick, while in JSX events are written in camelCase, e.g. onClick. You can directly assign JavaScript code to the event attribute, e.g. 
```
    <button onclick="alert('Hello')">Click me</button>
```
But in JSX, It is a best practice to define event handler functions separately and pass them as references to the event attributes, e.g.
```
    <button onClick={handleClick}>Click me</button>
```
you can also use inline arrow functions directly in JSX if the logic is simple:
```
    <button onClick={() => alert('Hello')}>Click me</button>
```

2. **Difference between onClick{alert(previous)} and onClick{( )=> alert(next)}**- These differences arise from how JavaScript functions are executed and how event handlers are assigned in React.
```
    onClick={alert(previous)}
```
- Executes immediately when the component renders.
- No event handling occurs because the function is already executed.
- onClick={alert(previous)}: Assigns the result of alert(previous) (which is undefined) to onClick.

```
    onClick={() => alert(next)}
```
- Executes when the button is clicked.
- Proper event handling occurs when the button is clicked.
- This syntax assigns an anonymous function to onClick. 
- onClick={() => alert(next)}: Assigns a function to onClick that will call alert(next) when the event occurs.

3. **color highlight -** is an extenstion in VScode used for highlighting colors

4. **How to write inline styling in JSX-** Inline styles in React are defined as an object where the property names are written in camelCase, and the values are strings
```
    <button
    style={{ backgroundColor: "#7950f2", color: "#fff" }}>Previous
    </button>
```

5. **State -** refers to an object that holds data relevant to a component. It allows components to keep track of changing information and re-render the UI accordingly. Each React component can have its own state. When the state of a component changes, React automatically re-renders the component to reflect the updated state. Updating state triggers React to re-render the component. So state alllows developers to
- Update the component's view by re-rendering it
- Persist local variables between renders - this means maintaining the state of those variables even when the component re-renders. In React, components can re-render for various reasons such as state changes, props changes, or parent component re-renders. During these re-renders, you want your component to retain certain values (local variables) across these renders. This is typically done using the useState hook in functional components or this.state in class components.
Example -
```
    import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0); // Declare state variable `count`

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
};

export default Counter;

```

6. **Creating a state variable using useState -** the useState hook allows you to manage the state of your component

```
// Import the useState Hook
import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    // Function to handle the button click and increment the count
    const handleIncrement = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={handleIncrement}>Increment</button>
        </div>
    );
};

export default Counter;

```
- state is the current state value.
- setState is the function used to update the state.
- Declare a state variable `count` with an initial value of 0
- initialValue is the initial value of the state.
- we should only update state using the setter function(setCount), not manually
7. React reacts to state changes by re-rendering the UI
8. Each component manages its own state, no matter how many times we render the component

#### summary
- Use state for any data that the component should keep track of over time. This is data that will change over time.
- Use state for something in the component that is dynamic, so you want to update it when the state changes.
- If you want to change the way a component looks, or the data it displays, **update its state** this is usually done by the event handler function
- Do not use state for variables that should not trigger a re-render, it can cause unnecessary re-renders which can cause performance issue