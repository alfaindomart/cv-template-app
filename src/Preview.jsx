/* eslint-disable react/prop-types */
import ProfilePreview from "./components/profile/Profile-preview";
import PastWorkPreview from "./components/past-work/PastWork-preview";
// import EducationPreview from "./components/education/Education-preview";

export default function Preview({profile, pastWork}) {

    return (
    <>
    <div>
        <ProfilePreview 
        name={profile.Name} 
        email={profile.Email} 
        phone={profile.Phone} 
        city={profile.City}/>
    </div>
    <div>
        <h2>Work Experience</h2>
        <PastWorkPreview 
        pastCompany={pastWork.PastCompany}
        startDate={pastWork.StartDate}
        endDate={pastWork.EndDate}
        companyLocation={pastWork.Location}
        jobTitle={pastWork.JobTitle}/>
    </div>

    </>
    )
}