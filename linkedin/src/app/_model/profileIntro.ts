import { Organization } from './organization';
import { DataRequire } from './../_models/data-require';

export interface ProfileIntro{

    email: string;
    password: string;
    firstName?: string;
    lastName?: string;
    location?: string;
    recentJob?: string;
    recentCompany?: string;
    college?: string;
    degree?: string;
    specialization?: string;
    startYear?: string;
    endYear?: string;
    profilePhoto?: string;
    education?: Organization;
    country?: string;
    industry?: string;
    connectionsCount?: Number;
    address?: string;
    birthday?: string;
    phone?: string;
}