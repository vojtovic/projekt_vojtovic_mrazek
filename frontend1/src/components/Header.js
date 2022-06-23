/* Import základní knihovny Reactu */ 

import React from 'react'; 
import './Header.css'; 
 

/* Komponenta je vytvořena a exportována jako konstanta s využitím arrow function. */ 

export const Header = (props) => { 

    /* Komponentě mohou být při jejím volání předány atributy/props title a motto. 

       Jejich hodnoty načteme do konstant title a motto. */     

    const {text1, text2 } = props; 

 

    /* Zajistí vyrenderování komponenty - kód v jazyce JSX je převeden do podoby HTML. */ 

    return ( 

        /* V jazyce JSX používáme k vkládání tříd atribut className. */ 

        <header>
            <div className="image"style={{backgroundImage: 'url("../../img/hd-rain-in-the-sea-9y4gtl014id970fm.jpg")'}}></div>

            <div className="text">
            <h1 style={{fontSize: '50px'}}>{text1}</h1>
            <p style={{fontSize: '20px'}}>{text2}</p>
            </div>
            
            <div className="topnav" id="myTopnav">
  <a href="http://localhost:3000">Všechny články</a>
  <a href="http://localhost:3000/lednihokej">Lední Hokej</a>
  <a href="http://localhost:3000/vodnislalom">Vodní slalom</a>
  <a href="http://localhost:3000/horolezectvi">Horolezectví</a>
  <a href="http://localhost:3000/volejbal">Volejbal</a>
  <a href="javascript:void(0);" className="icon" onclick="myFunction()">
    <i className="fa fa-bars"></i>
  </a>
</div>




        </header> 

    ); 

} 

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
