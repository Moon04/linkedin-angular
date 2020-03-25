import { Course } from './course';
import { Project } from './project';
import { Language } from './language';

export interface ProfileAccomplishments{
    courses?: Course[];
    projects?: Project[];
    languages?: Language[];   
}