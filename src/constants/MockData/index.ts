import { JobDetail } from "../../components/JobCard"

export const CategoriesMock = [
    {
        id: 1,
        name: 'Category 1',
    },
    {
        id: 2,
        name: 'Category 2',
    },
    {
        id: 3,
        name: 'Category 3',
    },
    {
        id: 4,
        name: 'Category 4',
    },
    {
        id: 5,
        name: 'Category 5',
    },
    {
        id: 6,
        name: 'Category 6',
    }
]

export const CardJobMock: JobDetail[] = [
    {
        id: 1,
        title: null,
        description: 'A long description of the job 1 that will be displayed in the card job, for this reason we will test the length of the description',
        category: 'Category 1',
        image: 'https://picsum.photos/200/300',
        location: 'Location 1',
        date: '01/01/2020',
        price: '$100',
        canBeDoneRemotely: true,
        author: 'Author 1',
        urgent:false,
        tags: ['Tag 1', 'Tag 2', 'Tag 3'],
        difficulty: 'Easy',
        needPreviousExperience: false
        
    },
    {
        id: 2,
        title: 'Clean my house',
        description: 'A long description of the job 2 that will be displayed in the card job, for this reason we will test the length of the description. Repeting everything to test the length of the description',
        category: 'Cleaner',
        image: 'https://renanmomesso.vercel.app/profile.jpg',
        location: 'São Paulo',
        date: '01/01/2020',
        price: '$100',
        canBeDoneRemotely: false,
        author: 'Renan Momesso',
        tags: ['Tag 1', 'Tag 2', 'Tag 3'],
        urgent:true,
        difficulty: 'Hard',
        needPreviousExperience: '1 year exp...',
        qualifications: ['Need to be a good person, a magic person, have never been betraied before, need to have 30 years experience before 18 years', 
        'Need to have jumped from the moon', 
        'Have already done this job with someone else or with yourself'] 
    },
    {
        id: 3,
        title: 'Wash my dog in my house',
        description: 'A long description of the job 3 that will be displayed in the card job, for this reason we will test the length of the description',
        category: 'Category 3',
        image: 'https://picsum.photos/200/300',

        location: 'Location 3',
        tags: ['Tag 1', 'Tag 2', 'Tag 3'],
        date: '01/01/2020',
        price: '$100',
        canBeDoneRemotely: true,
        author: 'Author 1',
        urgent:false,
        qualifications: ['testing', 'testing', 'testing']
    },
    {
        id: 4,
        title: 'Codereview my codereview',
        description: 'A long description of the job 4 that will be displayed in the card job, for this reason we will test the length of the description',
        category: 'Category 4',
        image: 'https://picsum.photos/200/300',
        
        location: 'Location 4',
        tags: ['Tag 1', 'Tag 2', 'Tag 3'],
        date: '01/01/2020',
        price: '$100',
        canBeDoneRemotely: false,
        author: 'Author 1',
        urgent:false,
        qualifications: ['testing', 'testing', 'testing']
    }
]