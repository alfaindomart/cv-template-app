// import { useState } from 'react'
import './styles/App.css'
import { nanoid } from 'nanoid'
import { useState } from 'react'
import { placeHolderData } from './placeholder-data'
import Preview from './Preview'
import { ProfileInput } from './components/profile/Profile-input'
import PastWorkInput from './components/past-work/PastWork-input'
import EducationInput from './components/education/Education-input'
import AddWorkBtn from './components/buttons/add-work-btn'
// import AddWork from './components/past-work/AddWork'

function App() {
  const [profile, setProfile] = useState(placeHolderData.UserProfile)
  const [pastWorks, setPastWorks]  = useState(placeHolderData.PastWorks)
  const [pastEdcuation, setEducation] = useState(placeHolderData.PastEducation)


  function handleProfileChange(e) {
    const selected = e.target.id
    setProfile({...profile, [selected]: e.target.value})
    console.log(profile)
  }

  function handleWorkChange(e) {
    const target = e.target
    const workWrapper = target.closest('.past-work-wrap')
    const workObject = workWrapper.id
    const selectedInput = target.id

    console.log(workObject)
    console.log(selectedInput)
    console.log(target.value)
    
    setPastWorks(prevPastWorks => prevPastWorks.map(
      pastwork => {if (workObject.id === pastwork.UID) 
        {return {...pastwork, [selectedInput]: target.value}}
        return pastwork
      }
    )
    )}

  function handleEducationChange(e) {
    const selected = e.target.id
    setEducation({...pastEdcuation, [selected]: e.target.value})
  }

  function addNewExperience(e) {
    e.preventDefault()
    const newExperience = {
      UID: nanoid(),
      PastCompany: '',
      StartDate: '',
      EndDate: '',
      Location: '',
      JobTitle: '',
    }
    setPastWorks([...pastWorks, newExperience])
    console.log(pastWorks)
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
          {pastWorks.map((pastwork) => 
          (
            <PastWorkInput 
            key={pastwork.UID}
            id={pastwork.UID}
            onChange={handleWorkChange}
            PastCompany={pastwork.PastCompany}
            StartDate={pastwork.StartDate}
            EndDate={pastwork.EndDate}
            Location={pastwork.Location}
            JobTitle={pastwork.JobTitle}
            />
          )
          )}
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
