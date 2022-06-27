import React from 'react';
import ReactDOM from 'react-dom/client';

/*---- p5js with react ---*/
import Stetch from 'react-p5';

/*-- css ---*/
import './index.css';

const Button = (
    <button className="button-top" >Button 49</button>
);

/*--- textBackground varibles ---*/
var R_size = 0;
var C_size = 0;
var span = 100 ;
var dot_R = 10;

class textBackground extends React.Component {
    // constructor(){

    // }

    setup(){
        p5.createCanvas( p5.windowWidth , p5.windowHeight ).parent( canvasParent );

        /* Background Part */
        R_size = p5.width / span + 1 ;
        C_size = p5.height / span + 1;

        p5.angleMode( DEGREES );

        p5.stroke(255);
        p5.strokeWeight(3);
        p5.fill(255);
        p5.noStroke();
    };

    draw(){
        p5.background(0);
        this.CreateLine();
        this.CreateDot();
        this.UpdateMouse();
    };

    UpdateMouse(){
        p5.textSize(20);
        p5.fill( 255)
        p5.textStyle(BOLD)
        p5.push();
            
            let shift = 80 ;
            p5.text( "X : " + p5.mouseX+ (p5.noise(p5.frameCount/10)*10).toFixed(3) , shift , p5.height - shift+33 );

            p5.push();
                p5.strokeWeight(3);
                p5.stroke( 255 );
                p5.ine( 0 , p5.height -shift +10  , p5.width , p5.height-shift +10 );
            p5.pop();

            p5.push();
                p5.translate( shift , p5.height - shift );
                p5.rotate( -90 );
                p5.text( "Y : " + p5.mouseY+ (p5.noise(p5.frameCount/10)*10).toFixed(3) , 10 , -20 );

            p5.pop();

            p5.push();
                p5.strokeWeight(3);
                p5.stroke( 255 );
                p5.line( shift-10 , 0 ,shift-10 , p5.height );
            p5.pop();
        p5.pop();
    }

    CreateDot(){
        for(let i=0;i<R_size ; i++){
            for( let j =0 ; j<C_size ; j++){
                let x = i*span  , y=j*span ;
                if( i%3==0 && j%3==0){
                    p5.push();
                        p5.translate( x, y );
                        p5.rotate(45);
                        p5.noFill();
        
                        p5.stroke( 90 );
                        let cur_sz =  dot_R+ abs( 2*dot_R*sin(frameCount) );
                        p5.rect( -cur_sz/2, -cur_sz/2 , cur_sz , cur_sz );
    
                        
                        p5.stroke(255);
                        p5.rect( -dot_R/2, -dot_R/2 , dot_R , dot_R);
    
                    p5.pop();
                }
                else{
                    
                    p5.fill( 90 );
                    p5.circle( x ,y , dot_R);
                }
                
            }
        }
    }

    CreateLine(){
        p5.strokeWeight( 2 ) ;
        p5.stroke( 50 );
        for( let i=1;i<R_size ;i++){
            if( i%3==0){
                p5.line(i*span , 0 , i*span , height );
            }
        }

        for( let i=1;i<C_size ;i++){
            if( i%3==0){
                p5.line( 0 , i*span , width , i*span);
            }
        }
    }

    render(){
        return (
            <Stetch setup={this.setup} draw={ this.draw}/>
        );
    }
};

// const textBackground = (p5 , canvasParent) =>{

//     const setup = ()=>{
//         p5.createCanvas( p5.windowWidth , p5.windowHeight ).parent( canvasParent );

//         /* Background Part */
//         R_size = p5.width / span + 1 ;
//         C_size = p5.height / span + 1;

//         p5.angleMode( DEGREES );

//         p5.stroke(255);
//         p5.strokeWeight(3);
//         p5.fill(255);
//         p5.noStroke();
//     };

//     const draw = ()=>{
//         background(0);
//         CreateLine();
//         CreateDot();
//         UpdateMouse();
//     };
//     return (
//         <Stetch setup={setup} draw={draw}/>
//     );
// }

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
            <textBackground/>
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
            <Main/>
            <Footer/>
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