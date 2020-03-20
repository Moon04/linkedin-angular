import { Organization } from './organization';

export interface Project{
    projectName: string;
    startDate?: string;
    endDate?: string;
    associatedWith?: Organization;
    projectURL?: string;
    description?: string;
}