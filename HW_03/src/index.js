import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


const User_Image = (
    <img src="https://picsum.photos/300/300" alt='Image'/>
);


const UserName = {
    firstName : 'Jason',
    lastName : 'Liu'
}

const UserInfor = {
    job : 'Web dev',
    place : 'Taiwan'
}

const CheckIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16">
    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
    <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
    </svg>
);

const User = (
    <div className='userIamge'>
        {User_Image}
        <h2>{UserName.firstName} {UserName.lastName}</h2>
        <p>{UserInfor.job} {UserInfor.place}</p>
    </div>
);


const Skills_techs = ['HTML' , 'CSS' , 'Javascript' , 'React' , 'Node' , 'MongoDB' , 'Python' , 'Flask' , 'Django' , 'Numpy' , 'Pandas' , 'MySQL' , 'p5.js' , 'Heroku' ,'Git', 'Github'];

const Block_style = {
    display: 'inline-block',
    border:'solid 10px #83c5be',
    borderRadius: '5px',
    backgroundColor: '#83c5be',
    margin:'5px',
    textAlign: 'center',
    color: '#FFF',
};

function Block( ele ){
    return (
        <div className='block' style={ Block_style }>
            {ele}
        </div>
    );
}
const Techs = Skills_techs.map( (ele)=> Block(ele) );
const Skills = (
    <div className='skills'>
        <h2>SKILLS</h2>
        {Techs}
    </div>
);

const Date = {
    Y : '2022',
    M : 'June',
    D : '23'
};

const Detail = (
    <div className='details'>
        {CheckIcon}
          Joined on {Date.M} {Date.M} , {Date.Y}
    </div>
);

const Card_style = {
    height : 'auto',
    width : '500px',
    padding : '5px',
    margin : '10px',
    borderRadius : '10px',
    textAlign : 'center',
};

const card = (
    <div className='card' style={Card_style}>
        {User}
        {Skills}
        {Detail}
    </div>
);


const app = (
    <div className='app'>
        {card}
    </div>
);
const Root = document.getElementById( 'root' )
ReactDOM.render( app , Root );