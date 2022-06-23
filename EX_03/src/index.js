import React from 'react'
import ReactDOM from 'react-dom'

const bgc = '#EDF6F9'

const header = (
    <header >
       <div className='header-wrapper'>
            <h1>Learning React in 30 Days</h1>
            <h2>Write html and CSS in JS</h2>
            <h3>coool stuff </h3>
            <small>June 23,2022</small>
       </div>
    </header>
);

const main_style = {

}

const main = (
    <main >
        <div className='main-wrapper'>
            <p>Preprocess : </p>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
            </ul>
        </div>
    </main>
);

const footer_style = {
    backgroundColor: bgc
}

const footer = (
    <footer>
        <div className='footer-wrapper'>
            <p> footer </p>
        </div>
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
