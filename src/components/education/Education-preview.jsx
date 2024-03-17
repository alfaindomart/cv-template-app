/* eslint-disable react/prop-types */
import Responsibilities from "../past-work/components/Responsibilities"

export default function EducationPreview({shcoolName, graduationDate, location, degree}) {
    return(
    <div className="education wrap">
        <span className="name-date wrap">
            <div>{shcoolName}</div>
            <div>{graduationDate}</div>
        </span>
        <span className="degree-city wrap">
            <div>{degree}</div>
            <div>{location}</div>
        </span>
        <ul className="responsibilities">
            <Responsibilities></Responsibilities>
        </ul>
    </div>
    )
}