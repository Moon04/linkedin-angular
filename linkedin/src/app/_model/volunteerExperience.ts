import { Organization } from './organization';

export interface VolunteerExperience{
    organization: Organization;
    role: string;
    cause?: string;
    startDate?: string;
    endDate?: string;
    description?: string;
}