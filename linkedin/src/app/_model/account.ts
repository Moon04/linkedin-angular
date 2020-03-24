import { WorkInfo } from "./work-info";
import { EducationInfo } from "./education-info";
import { VolunteerInfo } from "./volunteer-info";
import { Skill } from "./skill";
import { Interst } from "./interst";
export interface Account {
  id?: number;
  firstName?: string;
  lastName?: string;
  position?: string;
  imageURL?: string[];
  connections?: Account[];
  studyPlace?: EducationInfo[];
  workPlace?: WorkInfo[];
  volunteerExperience?: VolunteerInfo[];
  country?: string;
  pastConnection?: boolean;
  about?: string[];
  skills?: Skill[];
  intersts?: Interst[];
}
