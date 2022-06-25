import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

/*****************
    Raw Data :
        User : 
            userName:
                firstName
                lastName
            userInfor:
                job
                place
            techs
            date:
                Y
                M
                D
*****************/

const firstNameList  = ['Jason' , 'Jack' , 'Rose' , 'Marry' , 'john' , 'Amber' ];
const lastNameList = ['Liu' , 'Lee' , 'Chen' , 'Lu' , 'Shie' , 'Wang' , 'Shen' ];
const jobList = [ 'DevOps' , 'Web Devs' , 'EE' , 'CS' , 'Data Analysis'];
const placeList = [ 'Taiwan' , 'Taipei' , 'US' , 'LA' , 'Japan'];
const YList = ['2022' , '2021' , '2020'];
const MList = ['May' , 'June' , 'July'];
const DList = [];
for(let i=1;i<=30;i++) DList.push(i);

const techsList = ['HTML' , 'CSS' , 'Javascript' , 'React' , 'Node' , 'MongoDB' , 'Python' , 'Flask' , 'Django' , 'Numpy' , 'Pandas' , 'MySQL' , 'p5.js' , 'Heroku' ,'Git', 'Github' , 'Vue' , 'Docker' ,'Next.js' , 'Node.js' , 'Express.js' , 'Laravel' , 'PHP' , 'AWS' , 'GCP' ];

const Card_style = {
    height : 'auto',
    width : '500px',
    padding : '5px',
    margin : '10px',
    borderRadius : '10px',
    textAlign : 'center',
};

const Block_style = {
    display: 'inline-block',
    border:'solid 10px #83c5be',
    borderRadius: '5px',
    backgroundColor: '#83c5be',
    margin:'5px',
    textAlign: 'center',
    color: '#FFF',
};

const lightTheme = {

};

const darkTheme = {

};


var DataList = [];

function random( ele ) {
    let max = ele.length;
    return ele[ Math.floor(Math.random() * max) ];
}
  
function randomInt( max ){
    return String(Math.floor(Math.random() * max ));
}

function randomTechs(){
    let len = randomInt( techsList.length );

    let result = techsList.slice(0,len+1);

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


function Random_Generate(){

    for( let i=0;i<10;i++){
        DataList.push({
            user:{
                url : "https://picsum.photos"+"/id/"+randomInt(500)+"/300/300",
                userName : {
                    firstName : random(firstNameList),
                    lastName : random(lastNameList),
                },
                userInfor : {
                    job : random(jobList),
                    place : random(placeList),
                },
            },
            techs : randomTechs(),
            date : {
                Y : random(YList),
                M : random(MList),
                D : random(DList),
            },
        });
    }
    
}

function CreateUser(){
    return {
        user:{
            url : "https://picsum.photos"+"/id/"+randomInt(500)+"/300/300",
            userName : {
                firstName : random(firstNameList),
                lastName : random(lastNameList),
            },
            userInfor : {
                job : random(jobList),
                place : random(placeList),
            },
        },
        techs : randomTechs(),
        date : {
            Y : random(YList),
            M : random(MList),
            D : random(DList),
        },
    };
}


Random_Generate();








/*****************
    Card :
        User
        Techs
        Details

*****************/
class Card extends React.Component{
    constructor( props ){
        super( props );
    }

    render(){
        return (
            <div className='Card' style={Card_style} key={Data} >
                < User user={ this.props.user } />
                < Techs techs={ this.props.techs } />
                < Detail date={ this.props.date } />
            </div>
        );
    }
}

/*****************
    User :
        Image
*****************/
const User = ( { user:{ Url ,UserName , UserInfor } } ) => {
    return (
        <div className='userIamge'>
            { Image( Url ) }
            <h2>{UserName.firstName} {UserName.lastName}</h2>
            <p>{UserInfor.job} {UserInfor.place}</p>
        </div>
    );
}

const Image = ( { url } )=>{
    return (
        <img src={ url } alt='' />
    );
};


const Techs = ( Data )=> {
    return (
        <div className='Techs'>
            <h2>TECHS</h2>
            { Data.map( (ele)=> {
                return (
                    <div className='block' style={ Block_style } key={ele}>
                        {ele}
                    </div> 
                );

            } ) }
        </div>
    );
}

/*****************
    Detail :
        CheckIcon
*****************/
const Detail  = ( date )=>{
    return (
        <div className='details'>
            {CheckIcon}
            Joined on {date.M} {date.M} , {date.Y}
        </div>
    );
};

const CheckIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16">
    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
    <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
    </svg>
);


/*****************
    Header :
        
*****************/
class Header extends React.Component {
    constructor( props ){
        super( props );
    }

    render(){
        return (
            <header>
                <div className='Header' style={props.style} >
                    <h1>{ props.text.Hello }</h1>
                    <h2>{ props.text.Title }</h2>
                    <h3>{ props.text.Subtitle }</h3>
                    <button onClick={ props.callback } ></button>
                </div>
            </header>
        );
    }
}

/*****************
    Main :
        Card
*****************/
class Main extends React.Component {
    constructor( props ){
        super( props );
    }

    render(){

        const Card_JSX = this.props.userData.map( (ele)=>{
            return (
                <Card style={ ele.style } user={ ele.user } techs={ ele.techs } date={ ele.date } />
            );
        });
        return (
            <div className='Main'>
                {Card_JSX}
            </div>
        );
    }
}

/*****************
    Footer :
        
*****************/
class Footer extends React.Component {
    constructor( props ){
        super( props );
    }

    render(){
        return (
            <footer>
                <div className='Footer' style={props.style}>
                    <p> Footer </p>
                </div>
            </footer>
        );
    }
}

/*****************
    App :
        Header
        Main
        Footer

*****************/
class App extends React.Component {
    constructor( props ){
        super( props );
        
        state = {
            isDark : 0,
            theme : {},
        };
    }

    change_theme(){
        if( isDark ){
            this.setState(
                {   isDark: !this.state.isDark,
                    theme : lightTheme ,
                }
            )   
        }
        else{
            this.setState(
                {   isDark: !this.state.isDark,
                    theme : darkTheme ,
                }
            )   
        }
    }

    render(){
        return (
            <div className='App'>
                <Header style={ this.state.theme.header } callback = { this.change_theme() } text={} />
                <Main style={ this.state.theme.card } userData = { this.props }/>
                <Footer style={ this.state.theme.footer } />
            </div>
        );
    }
}

const Root = ReactDOM.createRoot( document.getElementById( 'root' ) );
Root.render( < App data={ DataList }/>);

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