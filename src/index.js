// 1, import the react and reactdom libraries
 import React from "react";
 import ReactDom from "react-dom/client";
// 2, get a reference to the div with ID root 
const el = document.getElementById('root');
// 3, tell react to take control of that element
const root = ReactDom.createRoot(el);
// 4, create a component 
function App() {
    // const date = new Date();
    // const time = date.toLocaleTimeString();

    // return <h1>{time}</h1>;
    // return <h1>{new Date().toLocaleTimeString()}</h1>;

    /* const name = 'dada';
    const age = 20;

        return (
        <h1>
            Hi , my name is {name} and my age is {age}
        </h1>
    ); */


    /*const inputType = 'number';
    const minValue = 5;

    return <input type = {inputType} min={minValue}/>;*/
    // return <input style={{border:'3px solid red'}}type="number" min={5} />;

    // return < textarea autofocus ={false} />;

    return <input maxLength={5} />;
}
// 5, show the component on the screen 
root.render(<App />);