import { ProfileIntro } from './profileIntro';
import { ProfileAbout } from './profileAbout';
import { ProfileDashboard } from './profileDashboard';
import { ProfileBackground } from './profileBackground';
import { ProfileSkills } from './profileSkills';
import { ProfileAccomplishments } from './ProfileAccomplishments';
import { ProfileInterest } from './profileInterest';


export interface Profile{
    id: number;
    
    openContactInfoForm: boolean;
    openIntroForm: boolean;
    openAboutForm: boolean;
    openWorkExperienceForm: boolean;
    openEducationForm: boolean;
    openVolunteerExperienceForm: boolean;
    openSkillForm: boolean;
    openCourseForm: boolean;
    openProjectForm: boolean;
    openLanguageForm: boolean;
    openEditSkills: boolean;

    profileIntro: ProfileIntro;
    profileAbout?: ProfileAbout;
    profileDashboard: ProfileDashboard;
    profileBackground?: ProfileBackground;
    profileSkills?: ProfileSkills[];
    profileAccomplishments?: ProfileAccomplishments;
    profileInterests?: ProfileInterest[];
}