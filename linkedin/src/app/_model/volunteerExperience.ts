import { Organization } from './organization';

export interface VolunteerExperience{
    organization: Organization;
    role: string;
    cause?: string;
    startYear?: number;
    startMonth?: string;
    endYear?: number;
    endMonth?: string;
    description?: string;
}