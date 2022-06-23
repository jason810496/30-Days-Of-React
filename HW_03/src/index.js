import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const firstNameList  = ['Jason' , 'Jack' , 'Rose' , 'Marry' , 'john' , 'Amber' ];;
const lastNameList = ['Liu' , 'Lee' , 'Chen' , 'Lu' , 'Shie' , 'Wang' , 'Shen' ];
const jobList = [ 'DevOps' , 'Web Devs' , 'EE' , 'CS' , 'Data Analysis'];
const placeList = [ 'Taiwan' , 'Taipei' , 'US' , 'LA' , 'Japan'];
const YList = ['2022' , '2021' , '2020'];
const MList = ['May' , 'June' , 'July'];
const DList = [];
for(let i=1;i<=30;i++) DList.push(i);

const Skills_techs = ['HTML' , 'CSS' , 'Javascript' , 'React' , 'Node' , 'MongoDB' , 'Python' , 'Flask' , 'Django' , 'Numpy' , 'Pandas' , 'MySQL' , 'p5.js' , 'Heroku' ,'Git', 'Github' , 'Vue' , 'Docker' ,'Next.js' , 'Node.js' , 'Express.js' , 'Laravel' , 'PHP' , 'AWS' , 'GCP' ];



var DataList = [];

function random( ele ) {
    let max = ele.length;
    return ele[ Math.floor(Math.random() * max) ];
}
  
function randomInt( max ){
    return String(Math.floor(Math.random() * max ));
}

function randomSkills(){
    let len = randomInt( Skills_techs.length );

    let result = Skills_techs.slice(0,len+1);

    for(let i=0;i<=len;i++){
        for(let j=0;j<=len ;j++){
            if( Math.random() > 0.5 ){
                let temp = result[i];
                result[i] = result[j];
                result[j] = temp;
            }
        }
    }

    return result;
}

function User_Image() {
    const url = "https://picsum.photos"+"/id/"+randomInt(500)+"/300/300";
    return (
        <img src={url} alt=''/>
    );
};


const CheckIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16">
    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
    <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
    </svg>
);

function User( UserName , UserInfor ){

    console.log( UserName.firstName );

    return (
        <div className='userIamge'>
            {User_Image()}
            <h2>{UserName.firstName} {UserName.lastName}</h2>
            <p>{UserInfor.job} {UserInfor.place}</p>
        </div>
    );
}

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
        <div className='block' style={ Block_style } key={ele}>
            {ele}
        </div>
    );
}

function Skills( Data ){
    return (
        <div className='skills'>
            <h2>SKILLS</h2>
            { Data.map( (ele)=> Block(ele) ) }
        </div>
    );
}


function Detail ( date ){
    
    return (
    <div className='details'>
        {CheckIcon}
          Joined on {date.M} {date.M} , {date.Y}
    </div>
)};

const Card_style = {
    height : 'auto',
    width : '500px',
    padding : '5px',
    margin : '10px',
    borderRadius : '10px',
    textAlign : 'center',
};


function card( Data ){
    return(
        <div className='card' style={Card_style} key={Data}>
            {User( Data.userName , Data.userInfor ) }
            {Skills( Data.skills_techs) }
            {Detail( Data.date ) }
        </div>
    );
}

function Random_Generate(){

    for( let i=0;i<10;i++){
        DataList.push({
            user_Image_Url : "https://picsum.photos/300/300",
            userName : {
                firstName : random(firstNameList),
                lastName : random(lastNameList),
            },
            userInfor : {
                job : random(jobList),
                place : random(placeList),
            },
            skills_techs : randomSkills(),
            date : {
                Y : random(YList),
                M : random(MList),
                D : random(DList),
            },
        });
    }
    
    DataList.map( (ele)=> card(ele)  );
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