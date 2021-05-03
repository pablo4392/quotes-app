import './StylesComponents.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faFeatherAlt } from '@fortawesome/free-solid-svg-icons';

const Buttons = ({ twitterRef, handleClick }) => {
    return (
        <div className="quote-buttons">
            <a className="btn btn-outline-primary" href={twitterRef} target="_blank" rel="noreferrer">
                <FontAwesomeIcon className="btn-icon" icon={faTwitter} />
                Twitt
            </a>
            <button className="btn btn-outline-dark" onClick={() => handleClick()}>
                <FontAwesomeIcon className="btn-icon" icon={faFeatherAlt} />
                New quote
            </button>
        </div>
    )
}

export default Buttons;