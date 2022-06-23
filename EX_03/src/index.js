import React from 'react'
import ReactDOM from 'react-dom'

const bgc = '#EDF6F9'

const header_style = {
    backgroundColor: bgc,
    frontFamily: 'Helvetica Neue',
    padding: '5px',
}

const header = (
    <header style={ header_style }>
        <h1>Learning React in 30 Days</h1>
        <h2>Write html and CSS in JS</h2>
        <h3>coool stuff </h3>
        <small>June 23,2022</small>
    </header>
);

const main_style = {

}

const main = (
    <main style={ main_style }>
        <p>Preprocess : </p>
        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
        </ul>
    </main>
);

const footer_style = {
    backgroundColor: bgc
}

const footer = (
    <footer style={ footer_style }>
        <p> footer </p>
    </footer>
);

const app = (
    <div className='app'>
        {header}
        {main}
        {footer}
    </div>
);



const Root = document.getElementById( 'root' );
ReactDOM.render( app , Root );
