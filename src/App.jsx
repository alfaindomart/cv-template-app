// import { useState } from 'react'
import './styles/App.css'
import { useState } from 'react'
import { placeHolderData } from './placeholder-data'
import Preview from './Preview'
import { ProfileInput } from './components/profile/Profile-input'
import PastWorkInput from './components/past-work/PastWork-input'
import EducationInput from './components/education/Education-input'
import AddWorkBtn from './components/buttons/add-work-btn'
import AddWork from './components/past-work/AddWork'

function App() {
  const [profile, setProfile] = useState(placeHolderData.UserProfile)
  const [pastWorks, setPastWorks] = useState(placeHolderData.PastWorks)
  const [pastEdcuation, setEducation] = useState(placeHolderData.PastEducation)


  function handleProfileChange(e) {
    const selected = e.target.id
    setProfile({...profile, [selected]: e.target.value})
    console.log(profile)
  }

  function handleWorkChange(e, index) {
    const selected = e.target.id
    let currentWorkArr = [...pastWorks]
    setPastWorks({...pastWorks, [selected]: e.target.value})
    console.log(currentWorkArr[index])
  }

  function handleEducationChange(e) {
    const selected = e.target.id
    setEducation({...pastEdcuation, [selected]: e.target.value})
  }

  function addNewExperience(e) {
    e.preventDefault()
    return (
      <AddWork />
    )
  }


  return (
    <>
    <div className='app-wrap'>
      <form className="cv-form">
        <div>       
        <ProfileInput
        onChange={handleProfileChange}
        name={profile.Name}
        email={profile.Email}
        phone={profile.Phone}
        city={profile.City}
        />
        </div>
        <div>
          <PastWorkInput
          key={pastWorks[0].key}
          onChange={handleWorkChange}
          company={pastWorks[0].PastCompany}
          startDate={pastWorks[0].StarDate}
          endDate={pastWorks[0].EndDate}
          location={pastWorks[0].Location}
          jobTitle={pastWorks[0].JobTitle}
          />
          <AddWorkBtn onClick={addNewExperience}/>
        </div>
        <EducationInput 
        onChange={handleEducationChange}
        SchoolName={pastEdcuation.SchoolName}
        GraduationDate={pastEdcuation.GraduationDate}
        Location={pastEdcuation.Location}
        Degree={pastEdcuation.Degree}
        />
      </form>
      <div>
        <Preview 
        profile={profile}
        pastWorks={pastWorks[0]}
        pastEducation={pastEdcuation}
        />
      </div>
    </div>
    </>
  )
}

export default App
