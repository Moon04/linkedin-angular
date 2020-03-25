import { Organization } from './organization';

export interface Course{
    courseName: string;
    associatedWith?: Organization;
}