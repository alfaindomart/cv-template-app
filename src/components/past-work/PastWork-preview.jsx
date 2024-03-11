/* eslint-disable react/prop-types */
import Responsibilities from "./components/Responsibilities"

export default function PastWorkPreview(props) {
    const {pastCompany, startDate, endDate, companyLocation, jobTitle} = props
    return(
        <>
        <div className="past-work wrap">
            <span className="name-date wrap">
                <div>{pastCompany}</div>
                <div>{startDate} - {endDate}</div>
            </span>
            <span className="position-city wrap">
                <div>{jobTitle}</div>
                <div>{companyLocation}</div>
            </span>
            <ul className="responsibilities">
                <Responsibilities></Responsibilities>
            </ul>
        </div>

        </>
    )
}