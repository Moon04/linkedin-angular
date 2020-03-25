import { Organization } from './organization';

export interface Education{
    school: Organization;
    degree?: string;
    fieldOfStudy?: string;
    startYear?: string;
    endYear?: string;
    grade?: string;
    activities?: string;
    description?: string;
}