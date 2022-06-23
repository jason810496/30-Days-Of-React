import React from 'react'
import ReactDOM from 'react-dom'

const JSX = (<h1>This is a JSX element!</h1>);
const rootElement = document.getElementById( 'root' );

const header = (
    <header>
        <h1>Welcome to 30 Days Of React</h1>
        <h2>Header 2 </h2>
    </header>
);

ReactDOM.render( JSX , rootElement );
