import React, { useState, useEffect } from 'react';
import Heading from './components/Header';
import Figure from './components/Figure';
import WrongLetters from './components/WrongLetters';
import Word from './components/Word';
import Popup from './components/Popup';
import Notification from './components/Notification';
import { showNotification as show, checkWin } from './helpers/helpers';
import { Container, Header } from 'semantic-ui-react'
import './App.css';

const words = ['algorithm','program','python','api','boolean','char','machinelearning','javascript','oops','class','hackerrank','hackerearth',
'angular','react','yarn','nodejs','array','exception','loop','visualstudiocode','vscode','variable','google','intern','projects','certificates','vanillajavascript'
,'engineer','markuplanguage','package','frontend','backend','fullstack','serverside','developer','postgraduate','freecodecamp','geeksforgeeks','userinterface','userexperience',
'oracle','babel','webpack','binarysearch','mergesort', 'commit', 'push','constructor', 'css', 'eslint','django','elseif','script','framework','materialui','function',
'npm','git','heroku','helloworld','java','reactnative','jupyter','expo','epoch','deeplearning','php','binod','polymorphism','public','runtime','sdk','soap','rest',
'bus','ascii','paradigm','404notfound','servererror','algorithm','linux','sprites','json','nodemodules','build'

];
let selectedWord = words[Math.floor(Math.random() * words.length)];

function App() {
  const [playable, setPlayable] = useState(true);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    const handleKeydown = event => {
      const { key, keyCode } = event;
      if (playable && keyCode >= 65 && keyCode <= 90) {
        const letter = key.toLowerCase();
        if (selectedWord.includes(letter)) {
          if (!correctLetters.includes(letter)) {
            setCorrectLetters(currentLetters => [...currentLetters, letter]);
          } else {
            show(setShowNotification);
          }
        } else {
          if (!wrongLetters.includes(letter)) {
            setWrongLetters(currentLetters => [...currentLetters, letter]);
          } else {
            show(setShowNotification);
          }
        }
      }
    }
    window.addEventListener('keydown', handleKeydown);

    return () => window.removeEventListener('keydown', handleKeydown);
  }, [correctLetters, wrongLetters, playable]);

  function playAgain() {
    setPlayable(true);

    // Empty Arrays
    setCorrectLetters([]);
    setWrongLetters([]);

    const random = Math.floor(Math.random() * words.length);
    selectedWord = words[random];
  }

  return (
    <>
    <Container fluid>
     
      <Heading />
      <div className="game-container">
        <Figure wrongLetters={wrongLetters} />
        <WrongLetters wrongLetters={wrongLetters} />  
        <Word selectedWord={selectedWord} correctLetters={correctLetters} />
      </div>
     
      <Popup correctLetters={correctLetters} wrongLetters={wrongLetters} selectedWord={selectedWord} setPlayable={setPlayable} playAgain={playAgain} />
      <Notification showNotification={showNotification} />
    </Container>
      
    </>
  );
}

export default App;
