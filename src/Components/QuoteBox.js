import './StylesComponents.css';
import Text from './Text.js';
import 'bootstrap/dist/css/bootstrap.min.css';

const QuoteBox = ({ quoteBoxText, quoteBoxAuthor, twitterRef, handleClick}) => {    
    return (
        <div className='quote-box'>
            <div className='quote'>
                <Text quoteText={quoteBoxText} quoteAuthor={quoteBoxAuthor} />
                <div className="quote-buttons">
                    <a className="btn btn-outline-primary" href={twitterRef} target="_blank" rel="noreferrer">                        
                        Twittear
                    </a>
                    <button className="btn btn-outline-dark" onClick={() => handleClick()}>
                        New quote
                    </button>
                </div>
            </div> 
        </div>
    )
}

export default QuoteBox;