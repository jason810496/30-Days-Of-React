import React from 'react'
import ReactDOM from 'react-dom'

const Hello = 'Learning React in 30 Days';
const Title = 'Write html ans CSS in JS';
const substitle = 'coool stuff ';
const Author = {
    firstName: 'Jason',
    lastName: 'Liu'
};

const Date = 'June 23,2022';

const header = (
    <header >
       <div className='header-wrapper'>
            <h1>{ Hello }</h1>
            <h2>{ Title }</h2>
            <h3>{ substitle }</h3>
            <p>
                Author: {Author.firstName } {Author.lastName }
            </p>
            <small>Date:{ Date }</small>
       </div>
    </header>
);

const techs = [ 'HTML' , 'CSS' , 'JavaScript' ];
const techs_formatted = techs.map( (ele)=> <li>{ ele }</li>)
const main = (
    <main >
        <div className='main-wrapper'>
            <p>Preprocess 
                <strong>
                    <em>
                        React.js
                    </em>
                </strong>
                : </p>
            <ul>{techs_formatted}</ul>
        </div>
    </main>
);

// const footer_style = {
//     backgroundColor: bgc
// }

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
