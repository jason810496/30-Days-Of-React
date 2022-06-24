import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';



var DataList = [];

function isPrime( num ){
    if( num===2 ) return 2;
    if( num===1 ) return 1;
    if( num===0 || num%2===0) return 0;
    
    for(let i = 3;i*i<= num  ;  i++){
        if( num%i===0 ){
            return (i%2===0 ? 0:1);
        }
    }
    return 2;
}

const CreateData = ()=>{
    for(let num=1 ; num<=100;num++){
        DataList.push({
            num: num,
            type: isPrime(num),
        });
    }

    const CommentList =DataList.map( (ele)=>card(ele) );
    return CommentList;
};


function card( Data ){
    return(
        <div className='card' style={ Card_style(Data.type) } key={Data.num}>
            { Data.num }
        </div>
    );
}


const Card_style = ( type )=>{

    const clr = (type===0 ? 'green':(type===1 ? 'yellow':'red' ) );
    return {
        backgroundColor : clr,
        // borderRadius : '10px',
        display : 'inline-block',
        verticalAlign: 'middle',
        textAlign : 'center',
        lineHeight: '50px',
        // border:'solid 20px '+clr,
        color: '#FFF',
        fontWeight: 'bold',
        fontSize : 'large',
        height:'50px',
        width:'50px',
        margin:'1px',
       
    };
};

const app_style = {
    height:'auto',
    width:'530px',
    margin: 'auto',
};
const app = (
        <div className='app' style={app_style}>
            < CreateData />
        </div>
);

const Root = ReactDOM.createRoot( document.getElementById( 'root' ) );
Root.render( app );