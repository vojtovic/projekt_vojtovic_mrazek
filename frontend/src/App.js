/* Import základní knihovny Reactu */ 

import React from 'react' 

/* Soubor s CSS pro komponentu App */ 

import './App.css'; 

/* Import objektů ApolloClient, InMemoryCache, ApolloProvider z knihovny @apollo/client  

   Tyto objekty usnadní práci s GraphQL dotazy a zefektivní fungování vyrovnávací paměti - cache */ 

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client"; 

/* Import objektů BrowserRouter, Routes, Route z knihovny react-router-dom, pomocí kterých můžeme 

   efektivně vyřešit tzv. routování, neboli směrování v aplikaci - vytvoření odkazů na různá místa v aplikaci */ 

import { BrowserRouter, Routes, Route } from "react-router-dom"; 

 

/* Import komponenty Homepage, která se nachází v podsložce pages */ 

import Homepage from './pages/Homepage'; 

/* Importy modulů obsahujících komponenty Header a Footer. 

   Protože jsou exportovány jako konstanty, je nutné vložit jejich názvy mezi složené závorky. */ 

import { Header } from './components/Header'; 

import { Footer } from './components/Footer'; 

 

// Inicializace ApolloClienta 

const client = new ApolloClient({ 

  /* Nastavení adresy, na které backendový server přijímá dotazy GraphQL */ 

  uri: "http://localhost:1337/graphql", 

  /* Základní nastavení vyrovnávací paměti (cache) pro urychlení načtení často používaných částí webu */ 

  cache: new InMemoryCache(), 

}); 

 

/* Hlavní komponenta celé aplikace */ 

function App() { 

  return ( 

    /* Konstrukce komponenty s využitím jazyka JSX */ 

    /* Inicializace routeru - směrovače */ 

    <BrowserRouter> 

      {/* Inicializace služby Apollo s předáním nastavení klienta */} 

      <ApolloProvider client={client}> 

        {/* Vložení komponenty Header, které předáváme atributy/props title a motto. (viz (viz https://reactjs.org/docs/components-and-props.html)) */} 

        <Header text1="Sporty" text2="vše o sportovcích"/> 

        <main className="container"> 

          {/* Nastavení routování - směrování požadavků na správné komponenty */} 

          <Routes> 

            {/* URL adresa/cesta k domovské stránce */} 

            

          </Routes> 

        </main> 

        {/* Vložení komponenty Footer, které předáváme atributy/props logo a copyright. 

            Soubor skola-logo.png musí být umístěn ve složce public, která je chápána jako základní složka webu (obsahuje statické soubory). 

            Atribut/props copyright je v tomto případě předáván jako JS objekt, který má dvě vnitřní proměnné/atributy projectName a projectAuthor. */} 

        <Footer copyright={{projectName: "Ročníkový projekt IT2", projectAuthor: "Jakub Mrázek & Václav Vojtovič"}} /> 

      </ApolloProvider> 

    </BrowserRouter> 

  ); 

} 

 

/* Exportování modulu App, aby mohl být naimportován v jiných modulech */ 

export default App; 