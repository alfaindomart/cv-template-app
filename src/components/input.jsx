/* eslint-disable react/prop-types */
// import PropTypes from 'prop-types'

export default function Input({label, htmlFor, type, className, name, text, onChange}) {
    return (
        <>
        <div className={className + '-wrap'}>
            <label htmlFor={htmlFor}>{label}</label>
            <input type={type} className={className} name={name} value={text} onChange={onChange}/>
        </div>
        </>
    )
}

// Input.propTypes = {
//     ...Input: PropTypes.any
//     // label: PropTypes.string,
//     // htmlFor: PropTypes.string,
//     // type: PropTypes.string,
//     // className: PropTypes.string,
//     // text: PropTypes.string,
//     // onChange: PropTypes.any
// }