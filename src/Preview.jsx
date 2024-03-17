/* eslint-disable react/prop-types */
import './styles/preview.css'
import ProfilePreview from "./components/profile/Profile-preview";
import PastWorkPreview from "./components/past-work/PastWork-preview";
import EducationPreview from "./components/education/Education-preview";

export default function Preview({profile, pastWorks, pastEducation}) {

    return (
    <div className='preview-wrap'>
        <div className='profile-wrap'>
            <ProfilePreview 
            name={profile.Name} 
            email={profile.Email} 
            phone={profile.Phone} 
            city={profile.City}/>
        </div>
        <div className='work-wrap'>
            <h2>Work Experience</h2>
            <PastWorkPreview 
            pastCompany={pastWorks.PastCompany}
            startDate={pastWorks.StartDate}
            endDate={pastWorks.EndDate}
            companyLocation={pastWorks.Location}
            jobTitle={pastWorks.JobTitle}/>
        </div>
        <div className='education-wrap'>
            <h2>Education</h2>
            <EducationPreview 
            shcoolName={pastEducation.ShcoolName}
            graduationDate={pastEducation.GraduationDate}
            location={pastEducation.Location}
            degree={pastEducation.Degree}
            />
        </div>
    </div>
    )
}