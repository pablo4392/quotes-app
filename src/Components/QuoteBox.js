import React, {useState} from 'react';
import Data from '../quotes.json';
import Button from './Button.js';
import Text from './Text.js';

const QuoteBox = () => {
    const [randomNumber, setRandom ] = useState(0);

    const handleRandomNumber = () => {
        const random = Math.random() * (Data.quotes.length - 0);
        setRandom(Math.floor(random) + 0);
    }

    return (
        <div className='box'>
            <div className='quote'>
                <Text position={randomNumber} />
                <Button handleClick={handleRandomNumber}/>
            </div> 
        </div>
    )
}

export default QuoteBox;