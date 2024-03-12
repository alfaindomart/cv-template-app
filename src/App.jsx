// import { useState } from 'react'
import './App.css'
import { useState } from 'react'
import { placeHolderData } from './placeholder-data'
import Preview from './Preview'
import { ProfileInput } from './components/profile/Profile-input'
import PastWorkInput from './components/past-work/PastWork-input'

function App() {
  const [profile, setProfile] = useState(placeHolderData.UserProfile)
  const [pastWork, setPastWork] = useState(placeHolderData.PastWork1)


  function handleProfileChange(e) {
    const selected = e.target.id
    console.log(selected)
    setProfile({...profile, [selected]: e.target.value})
  }

  function handleWorkChange(e) {
    const selected = e.target.id
    setPastWork({...pastWork, [selected]: e.target.value})
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
          onChange={handleWorkChange}
          company={pastWork.PastCompany}
          startDate={pastWork.StarDate}
          endDate={pastWork.EndDate}
          location={pastWork.Location}
          jobTitle={pastWork.JobTitle}
          />
        </div>
      </form>
      <div className="preview-wrap">
        <Preview 
        profile={profile}
        pastWork={pastWork}
        />
      </div>
    </div>
    </>
  )
}

export default App
