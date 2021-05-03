import Data from '../quotes.json';
import './StylesComponents.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';

const Text = ({position}) => {
    return (
        <div>
            <p className="quote">
                <FontAwesomeIcon className="quote-icon" icon={faQuoteRight}/>
                {Data.quotes[position].quote}
            </p>
            <p className="author">{Data.quotes[position].author}</p>
        </div>
    )
}

export default Text;