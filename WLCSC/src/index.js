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


const lightColor = {
    
    text1 : '#1D3557',
    text2 : '#fff',
    header : {
        background : '#A8DADC',
        button : '#E63946',
    },
    main :{ 
        main: '#F1FAEE',
        card : {
            background : '#dbf2fa',
            border : '#b6edff',
            block : '#A8DADC',
        },
    },
    footer : '#A8DADC',
}

const darkColor = {
    text1 : '#fff',
    text2 : '#000',
    header : {
        background : '#00253E',
        button : '#9AC6C5',
    },
    main : {
        main: '#000',
        card: {
            background : 'rgb(5, 49, 93)',
            border : '#A5E6BA',
            block : '#9AC6C5',
        },
    },
    footer : 'rgb(8, 35, 62)',
}

const lightTheme = {
    
    header :{
        header : {
            backgroundColor: lightColor.header.background ,
            color: lightColor.text1 ,
        },
        button : {
            backgroundColor: lightColor.header.button ,
            color: lightColor.text1 ,
        }
    },
    main:{
        main:{
            backgroundColor: lightColor.main.main ,
        },
        card : {
            card:{
                backgroundColor: lightColor.main.card.background ,
                borderColor:lightColor.main.card.border ,
                color: lightColor.text1 ,
            },
            block:{
                backgroundColor: lightColor.main.card.block,
                borderColor: lightColor.main.card.block,
                color: lightColor.text2 ,
            },
        },
    },
    footer:{
        backgroundColor: lightColor.footer,
        color: lightColor.text1,
    },
};

const darkTheme = {
    
    header :{
        header : {
            backgroundColor: darkColor.header.background ,
            color: darkColor.text1 ,
        },
        button : {
            backgroundColor: darkColor.header.button ,
            color: darkColor.text1 ,
        }
    },
    main:{
        main : {
            backgroundColor: darkColor.main.main ,
        },
        card : {
            card:{
                backgroundColor: darkColor.main.card.background ,
                borderColor:darkColor.main.card.border ,
                color: darkColor.text1 ,
            },
            block:{
                backgroundColor: darkColor.main.card.block,
                borderColor: darkColor.main.card.block,
                color: darkColor.text1 ,
            },
        },
    },
    footer:{
        backgroundColor: darkColor.footer,
        color: darkColor.text1,
    },
};

/*****************
    Random Generate Function 
    
*****************/
function random( ele ) {
    let max = ele.length;
    return ele[ Math.floor(Math.random() * max) ];
}
  
function randomInt( max ){
    return Math.floor(Math.random() * max );
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


function CreateUser(){
    return {
        user:{
            url : `https://picsum.photos/id/${ randomInt(500) }/300/300`,
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



/*****************
    Card :
        User
        Techs
        Details

*****************/
class Card extends React.Component{
    constructor( props ){
        super( props );
        this.state = {};
    }

    render(){
        // console.log( "card" , this.props.style );

        return (
            <div className='Card' style={ this.props.style.card } >
                < User user={ this.props.user } />
                < Techs techs={ this.props.techs } style={ this.props.style.block }/>
                < Detail date={ this.props.date } />
            </div>
        );
    }
}

/*****************
    User :
        Image
*****************/
const User = ( props ) => {


    return (
        <div className='userIamge'>
            { Image(  props.user.url ) }
            <h2>{  props.user.userName.firstName} {  props.user.userName.lastName}</h2>
            <p>{  props.user.userInfor.job} {  props.user.userInfor.place}</p>
        </div>
    );
}

const Image = ( url )=>{

    return (
        <img src={ url } alt='' />
    );
};


const Techs = ( props )=> {
    return (
        <div className='Techs'>
            <h2>TECHS</h2>
            { props.techs.map( (ele)=> {
                return (
                    <div className='block' style={ props.style } key={ele}>
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
const Detail  = ( props )=>{
    return (
        <div className='details'>
            {CheckIcon}
            Joined on { props.date.M} { props.date.M} , {props.date.Y}
        </div>
    );
};

const CheckIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-circle" viewBox="0 0 16 16">
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
        this.state = {};
    }

    render(){

        // console.log( this.props.style.button );

        return (
            <header style={ this.props.style.header } >
                <div className='Header'  >
                    <h1>{ this.props.text.Hello }</h1>
                    <h2>{ this.props.text.Title }</h2>
                    <h3>{ this.props.text.Subtitle }</h3>
                    <button onClick={ this.props.callback } style={ this.props.style.button } >Change Theme</button>
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
        this.state = {};
    }

    render(){

        console.log( "Style :  " , this.props.style );
        console.log( "Main :  " , this.props.style.main );
        console.log( "Card:" , this.props.style.card );

        const Card_JSX = this.props.userData.map( (ele ,id )=>{
            return (
                <Card style={ this.props.style.card } user={ ele.user } techs={ ele.techs } date={ ele.date } key={ id } />
            );
        });
        return (
            <div className='Main' style={ this.props.style.main }>
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
        this.state = {};
    }

    render(){
        return (
            <footer style={ this.props.style} >
                <div className='Footer' >
                    <p>{ this.props.text }</p>
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
        
        this.state = {
            isDark : 0,
            theme : lightTheme,
        };
    }

    change_theme(){
        if( this.state.isDark ){
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

        // console.log( "Dubeug : " , this.state.theme );

        return (
            <div className='App'>
                <Header style={ this.state.theme.header } callback = { ()=> this.change_theme() } text={ this.props.text.header } />
                <Main style={ this.state.theme.main } userData = { this.props.userData } />
                <Footer style={ this.state.theme.footer } text={ this.props.text.footer } />
            </div>
        );
    }
}


// main program 


var DataList = [];
for(let i=0;i<10;i++){
    DataList.push( CreateUser() );
}


const text = {
    header : {
        Hello : "30 Days of React",
        Title : "React",
        Subtitle : "Cooool stuff",

    },
    footer : "Footer",

};

const Root = ReactDOM.createRoot( document.getElementById( 'root' ) );
Root.render( < App userData={ DataList } text={ text }/>);

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