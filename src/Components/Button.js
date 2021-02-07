import '../App.css'

const Button = ({handleClick}) => {
    return (
        <button className='button' onClick={() => handleClick()} >
            New quote
        </button>
    )
}

export default Button;