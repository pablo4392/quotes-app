import './StylesComponents.css';
import Text from './Text.js';
import 'bootstrap/dist/css/bootstrap.min.css';

const QuoteBox = ({randomNumber, handleClick}) => {    
    return (
        <div className='box'>
            <div className='quote'>
                <Text position={randomNumber} />
                <button className="btn btn-outline-primary" onClick={() => handleClick()}>
                    New quote
                </button>
            </div> 
        </div>
    )
}

export default QuoteBox;