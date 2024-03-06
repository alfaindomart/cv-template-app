- 1 header title "Build Your Resume"
- 2 column

  - Left Column is a form with following inputs:

    - Name
    - Contact Address
      - Email
      - Phone Number
      - City
    - Work Experience
      - Company Name
      - Work Date
      - Location
      - Position
      - Experience at job
    - {A plus button to add more work experience}
    - Education
      - School Name
      - Graduation Month/Year
      - City
      - Degree In
      - GPA
      - Achievement
    - {Add a plus button to add more education}
    - ## Certification, Skills, Interests
    - {SAve to PDF button}

  - Right Column is the CV, refer to actual CV for Design

User load the app,
input is empty, preview show temporary data (preview => name = john doe; email: johndoe@jmail)
user start typing in name and email:
user clicked name input,

    onChange, setState of the input and name preview

//Shark's cv app code structure
<index>
<App>
import Resume(output preview) and PersonalDetail input(name, email, phone)
parent state (personalInfo, setPersonalInfo)
handleOnChange(setPersonalInfo)
return PersonalDetail and Resume
<PersonalDetail> (Props: onChange, email, name, phone)
import InputGroup
has onChange which has setPersonalInfo
return InputGroup (InputGroup Props = PersonalDetails props)
<InputGroup> (Props: label, name, usual inputs properties)
return inputs
<Resume>(Props: PersonalInfo, etc)
import PersonalInfoSection
has PersonalInfo as a prop
return PersonalInfoSection (PersonalInfosSection props = Resume Props)
<PersonalInfoSection> (Props: email, name, phone)
return divs
