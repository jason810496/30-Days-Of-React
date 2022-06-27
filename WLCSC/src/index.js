import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const Button = (
    <button className="button-top" >Button 49</button>
);

const Header = ()=>{
    return (
        <header>
            <div className='Header'>
                {Button}
            </div>
        </header>
    );
};

const Main = ()=>{
    return(
        <div className='Main'>
            
        </div>
    );
}

const Footer = ()=>{
    return (
        <footer>
            <div className ='Footer'>

            </div>
        </footer>  
    );
}

const App = () => {
    return (
        <div className='App'>
            <Header/>
        </div>
    );
};


const Root = ReactDOM.createRoot( document.getElementById( 'root' ) );
Root.render( <App/> );

/*****************
    App :
        Header :
        Main :
            Card:
                User :
                    Image
                Techs :
                Details:
                    checkIcon
        Footer :

*****************/