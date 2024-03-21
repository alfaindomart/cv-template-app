/* eslint-disable react/prop-types */
// import PropTypes from 'prop-types'

export default function Input(props) {
    const {label, htmlFor, type, id, name, value, onChange} = props
    return (
        <>
        <div id={id + '-wrap'}>
            <label htmlFor={htmlFor}>{label}</label>
            <input 
            type={type} 
            id={id} 
            name={name} 
            value={value}
            onChange={onChange}/>
        </div>
        </>
    )
}

// Input.propTypes = {
//     ...Input: PropTypes.any
//     // label: PropTypes.string,
//     // htmlFor: PropTypes.string,
//     // type: PropTypes.string,
//     // id: PropTypes.string,
//     // text: PropTypes.string,
//     // onChange: PropTypes.any
// }