import './App.css';
import Data from './quotes.json';
import QuoteBox from './Components/QuoteBox.js'
import React, {useState} from 'react';

function App() {
  const [randomNumber, setRandom ] = useState(0);
  const [backgroundColor, setBackgroundColor] = useState("#eeebdd");
  const random = Math.random() * (Data.quotes.length);
  const twittURL = `https://twitter.com/intent/tweet?text=${Data.quotes[randomNumber].quote}%20${Data.quotes[randomNumber].author}`;
  const quote = Data.quotes[randomNumber].quote;
  const author = Data.quotes[randomNumber].author;

  const handleRandomNumber = () => {
      setRandom(Math.floor(random));
  
      const letterGenerator = () => {
          var letters = ["a","b","c","d","e","f","0","1","2","3","4","5","6","7","8","9"];
          var number = (Math.random()*15).toFixed(0);
          return letters[number];
      }

      setBackgroundColor(() => {
          var color = "";
          for(var i=0;i<6;i++){
              color = color + letterGenerator() ;
          }
          return "#" + color;
      })
  }

  return (
    <div className="App" style={{background: backgroundColor}}>
      <QuoteBox quoteBoxText={quote} quoteBoxAuthor={author} twitterRef={twittURL} handleClick={handleRandomNumber} />
    </div>
  );
}

export default App;