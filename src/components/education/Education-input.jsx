/* eslint-disable react/prop-types */
import Input from "../Input";

function EducationInput(props) {
    const {SchoolName, GraduationDate, Location, Degree, onChange} = props

    return (
    <>
        <Input id={"SchoolName"} htmlFor={"SchoolName"} label={"School Name"} type={"text"} value={SchoolName} name={"SchoolName"} onChange={onChange} />
        <Input id={"GraduationDate"} htmlFor={"GraduationDate"} label={"Graduation Date"} type={"text"} value={GraduationDate} name={"GraduationDate"} onChange={onChange} />
        <Input id={"SchoolLocation"} htmlFor={"SchoolLocation"} label={"Location"} type={"text"} value={Location} name={"SchoolLocation"} onChange={onChange} />
        <Input id={"Degree"} htmlFor={"Degree"} label={"Degree"} type={"text"} value={Degree} name={"Degree"} onChange={onChange} />
    </>
    )
}

export default EducationInput