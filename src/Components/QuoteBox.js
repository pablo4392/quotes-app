import './StylesComponents.css';
import Text from './Text';
import Buttons from './Buttons'

const QuoteBox = ({ quoteBoxText, quoteBoxAuthor, boxTwitterRef, boxHandleClick }) => {    
    return (
        <div className='quote-box'>
            <div className='quote'>
                <Text quoteText={quoteBoxText} quoteAuthor={quoteBoxAuthor} />
                <Buttons twitterRef={boxTwitterRef} handleClick={boxHandleClick} />                
            </div> 
        </div>
    )
}

export default QuoteBox;