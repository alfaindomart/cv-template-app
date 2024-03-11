/* eslint-disable react/prop-types */
import Input from "../Input";

function PastWorkInput(props) {
    const {company, startDate, endDate, location, jobTitle, onChange} = props


    return (
     <div id="past-work-wrap">
         <Input id={"PastCompany"} htmlFor={"PastCompany"} label={"Company Name"} type={"text"} name={"PastCompany"} value={company} onChange={onChange}/>
         <Input id={"Location"} htmlFor={"Location"} label={"City"} type={"text"} name={"Location"} value={location} onChange={onChange}/>
         <Input id={"StartDate"} htmlFor={"StartDate"} label={"Start Date"} type={"date"} name={"StartDate"} value={startDate} onChange={onChange}/>
         <Input id={"EndDate"} htmlFor={"EndDate"} label={"End Date"} type={'date'} name={"EndDate"} value={endDate} onChange={onChange}/>
         <Input id={"JobTitle"} htmlFor={"JobTitle"} label={"Job Title"} type={"text"} name={"JobTitle"} value={jobTitle} onChange={onChange}/>
     </div>   
    )
}

export default PastWorkInput