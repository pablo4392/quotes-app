import './StylesComponents.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';

const Text = ({ quoteText, quoteAuthor }) => {
    return (
        <div>
            <p className="quote">
                <FontAwesomeIcon className="quote-icon" icon={faQuoteRight}/>
                {quoteText}
            </p>
            <p className="author">
                {quoteAuthor}
            </p>
        </div>
    )
}

export default Text;