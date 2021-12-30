// Tutorial: Intro to React
// https://reactjs.org/tutorial/tutorial.html
// JSX = HTML 💗 JavaScript used in React
// Supported Events Listeners https://reactjs.org/docs/events.html#supported-events
/*
Installation:
npx create-react-app <app-name>
cd <app-name>
npm start
*/
// https://create-react-app.dev/

import { animals } from './animals';
import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

const background = <img className='background' alt='ocean' src='/images/ocean.jpg' />
const title = '';

const images = [];

for (const animal in animals) {
    images.push(
    <img 
    key={animal} 
    className='animal' 
    alt={animal} 
    src={animals[animal].image} 
    aria-label= {animal}
    role='button'
    onClick={e => displayFact(e)}
    />)
};

const displayFact = (e) => {
    console.log(e.target);
    let selectedAnimal = e.target.alt;
    const optionIndex = Math.floor(Math.random() * animals[selectedAnimal].facts.length);
    let randomFact = animals[selectedAnimal].facts[optionIndex];
    console.log(randomFact);
    const theFact = document.getElementById('fact');
    theFact.innerHTML = randomFact;
  };

const showBackground = true;

const animalFacts = (
    <div>
        {showBackground && background}
        <div className='animals'>
            {images}
        </div>
        <p id='fact'></p>
        <h1>
        {title === '' ? 'Click an animal for a fun fact' : title}
        </h1>
    </div>
  );


ReactDOM.render(animalFacts, document.getElementById('root'))