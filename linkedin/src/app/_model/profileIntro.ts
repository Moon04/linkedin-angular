import { Organization } from './organization';

export interface ProfileIntro{
    profilePhoto: string;
    firstName: string;
    lastName: string;
    headline: string;
    education: Organization;
    country: string;
    location?: string;
    industry: string;
    connectionsCount: Number;
    address?: string;
    birthday?: string;
    email: string;
    phone?: string;
}