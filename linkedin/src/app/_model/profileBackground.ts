import { WorkExperience } from './workExperience';
import { Education } from './education';
import { VolunteerExperience } from './volunteerExperience';

export interface ProfileBackground{
    workExperience?: WorkExperience[];
    education?: Education[];
    volunteerExperience?: VolunteerExperience[];
}