import Proptypes from 'prop-types'


const Button = ({ color, text, onClick}) => {


    return ( 
    <button onClick= {onClick}style={{ backgroundColor: color}}
    className='btn'>{text}Add</button>
    )
}
Button.defaultProsps ={
    color: 'steelblue',
}

Button.propTypes ={
    text: Proptypes.string,
    color: Proptypes.string,
    onClick: Proptypes.func,
}

export default Button