import './App.css';
import QuoteBox from './Components/QuoteBox.js'
import React, {useState} from 'react';
import Data from './quotes.json';

function App() {
  const [randomNumber, setRandom ] = useState(0);
  const [backgroundColor, setBackgroundColor] = useState("#eeebdd")
  const random = Math.random() * (Data.quotes.length);

  const handleRandomNumber = () => {
      setRandom(Math.floor(random));
  
      const letterGenerator = () => {
          var letras = ["a","b","c","d","e","f","0","1","2","3","4","5","6","7","8","9"];
          var numero = (Math.random()*15).toFixed(0);
          return letras[numero];
      }

      setBackgroundColor(() => {
          var coolor = "";
          for(var i=0;i<6;i++){
              coolor = coolor + letterGenerator() ;
          }
          return "#" + coolor;
      })
  }

  return (
    <div className="App" style={{background: backgroundColor}}>
      <QuoteBox randomNumber={randomNumber} handleClick={handleRandomNumber} />
    </div>
  );
}

export default App;