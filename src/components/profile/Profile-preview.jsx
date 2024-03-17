/* eslint-disable react/prop-types */

export default function ProfilePreview({name, email, phone, city}) {
    return (
        <>
        <span className="name-wrap">{name}</span>
        <span className="contact-wrap">
            <div className="email-wrap">{email}</div>
            <div className="phone-wrap">{phone}</div>
            <div className="city-wrap">{city}</div>
        </span>
        </>
    )
}