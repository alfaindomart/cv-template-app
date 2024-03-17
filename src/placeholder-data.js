import { nanoid } from "nanoid"

export const placeHolderData = {
    UserProfile: {
        Name: 'Mr Hasan',
        Email: 'Mr_hasanoedien@fireship.com',
        Phone: '0812345678',
        City: ' New Mergan City',
    },
    PastWorks: [
        {
        key: nanoid(),
        PastCompany: 'Warung Bamboeeee.com',
        StartDate: '12 October 2020',
        EndDate: '13 December 2022',
        Location: 'New Mergan City',
        JobTitle: 'CEO/Owner',
        Responsibilities: {
            1: 'develop and manage all cupang',
            2: 'Meditate to calm my mind which result in better cupang'
        }},
    ],
    PastEducation: {
        SchoolName: 'Brawijaya University',
        GraduationDate: '2019',
        Location: 'Malang',
        Degree: 'Master of Cupang Relationship',
        Achievement: {
            1: 'Winner of Cupang Battle Royale with over 100 participants',
            2: 'Negotiate and Resolve Conflict Between 3 Cupangs'
        }
    },
    Certification: 'Cupang breeder ISO',
    Skill: 'Meditation, Photography',
    Interest: 'yg gede gede'
}