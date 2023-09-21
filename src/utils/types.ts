export interface IProfileUserProps {
    name: string;
    profission: string;
    email: string;
    profileType: 'Freelancer' | 'Employer' | 'Recruiter' | 'Admin' | 'Both' | 'Customer';
    jobsQnt: number;
    reviewsNumber: number;
    verified: boolean;
    skills: string[];
    services?: string[];
    cv?: any;
    reviews?: IReviewsProps;
}

export interface IReviewsProps {
    name: string;
    rating: number;
    review: string;
}
