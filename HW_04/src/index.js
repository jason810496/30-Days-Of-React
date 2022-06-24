import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';



var DataList = [];

function random( ele ) {
    let max = ele.length;
    return ele[ Math.floor(Math.random() * max) ];
}
  
function randomInt( max ){
    return String(Math.floor(Math.random() * max ));
}

const Card_style = ( hexColor )=>{

    return {
        display: 'inline-block',
        border:'solid 20px '+hexColor,
        padding : '5px',
        margin : '10px',
        borderRadius : '10px',
        textAlign : 'center',
        backgroundColor: hexColor,
        color: '#FFF',
        fontWeight: 'bold',
        fontSize : 'large',
    };
};


function card( Data ){
    return(
        <div className='card' style={ Card_style(Data) } key={Data}>
            { Data }
        </div>
    );
}

const hexColor = () => {
    let str = '0123456789abcdef';
    let color = '';
    for (let i = 0; i < 6; i++) {
      let index = Math.floor(Math.random() * str.length);
      color += str[index];
    }
    return '#' + color;
}

function Random_Generate(){
    for(let i=0;i<54;i++){
        DataList.push( hexColor() );
    }
}


Random_Generate();

console.log( DataList );

const app = (
        <div className='app'>
            { DataList.map( (ele)=>card(ele) ) }
        </div>
);

const Root = ReactDOM.createRoot( document.getElementById( 'root' ) );
Root.render( app );