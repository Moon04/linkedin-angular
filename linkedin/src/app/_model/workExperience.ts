import { Organization } from './organization';

export interface WorkExperience{
   title: string;
   employmentType?: string;
   company: Organization;
   location?: string;
   startDate: string;
   endDate: string;
   headline: string;
   description?: string;
}