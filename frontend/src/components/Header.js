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
    <div class="navbar" id="myNavbar">
  <a href="#home" class="active">Home</a>
  <a href="#news">News</a>
  <a href="#contact">Contact</a>
  <a href="#about">About</a>
  <a href="javascript:void(0);"style={{fontSize: '15px'}}class="icon" onclick="myFunction()">&#9776;</a>
    </div>

            <div class="image"style={{backgroundImage: 'url("../../img/hd-rain-in-the-sea-9y4gtl014id970fm.jpg")'}}></div>

            <div class="text">
            <h1 style={{fontSize: '50px'}}>{text1}</h1>
            <p style={{fontSize: '20px'}}>{text2}</p>
            </div>
            
        </header> 

    ); 

} 


function myFunction() {
    var x = document.getElementById("myNavbar");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
  }