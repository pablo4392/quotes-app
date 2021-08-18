import './App.css';
import Data from './quotes.json';
import QuoteBox from './Components/QuoteBox.js'
import React, {useState} from 'react';


function App() {
  const [randomNumber, setRandom ] = useState(Math.trunc(Math.random()*Data.quotes.length));
  const [backgroundColor, setBackgroundColor] = useState("#B2B1B9");
  const colorsArray = ["#7952B3", "#E2703A", "#EF8D32", "#125D98", "#E4BAD4", "#325288", "#763857", "#FFC93C", "#E93B81", "#E1F1DD", "#F98404", "#5C527F", "#BDA7D6", "#7FC716", "#B7F0B3", "#548CA8", "#716F81", "#055052", "#628395", "#FFA0A0", "#54436B", "#7C83FD", "#D54C4C"];
  const twittURL = `https://twitter.com/intent/tweet?text=${Data.quotes[randomNumber].quote}%20${Data.quotes[randomNumber].author}`;
  const allQuotes = Data.quotes.length
  const random = Math.random() * allQuotes;
  const quote = Data.quotes[randomNumber].quote;
  const author = Data.quotes[randomNumber].author;

  const handleRandomNumber = () => {
      setRandom(Math.floor(random));
      setBackgroundColor(() => {
        const randomPosition = Math.trunc(Math.random()*colorsArray.length)
        return colorsArray[randomPosition]
      })
  }

  return (
    <div className="App" style={{background: backgroundColor}}>
      <QuoteBox quoteBoxText={quote} quoteBoxAuthor={author} boxTwitterRef={twittURL} boxHandleClick={handleRandomNumber} />
    </div>
  );
}

export default App;