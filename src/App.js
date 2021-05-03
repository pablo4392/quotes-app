import './App.css';
import Data from './quotes.json';
import QuoteBox from './Components/QuoteBox.js'
import React, {useState} from 'react';

function App() {
  const [randomNumber, setRandom ] = useState(0);
  const [backgroundColor, setBackgroundColor] = useState("#eeebdd")
  const random = Math.random() * (Data.quotes.length);
  const twittURL = `https://twitter.com/intent/tweet?text=${Data.quotes[randomNumber].quote}%20${Data.quotes[randomNumber].author}`

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
      <QuoteBox quoteBoxText={Data.quotes[randomNumber].quote} quoteBoxAuthor={Data.quotes[randomNumber].author} twitterRef={twittURL} handleClick={handleRandomNumber} />
    </div>
  );
}

export default App;