import { ProfileIntro } from './profileIntro';
import { ProfileAbout } from './profileAbout';
import { ProfileDashboard } from './profileDashboard';
import { ProfileBackground } from './profileBackground';
import { ProfileSkills } from './profileSkills';
import { ProfileAccomplishments } from './ProfileAccomplishments';
import { ProfileInterest } from './profileInterest';


export interface Profile{
    id: string;
    profileIntro: ProfileIntro;
    profileAbout?: ProfileAbout;
    profileDashboard: ProfileDashboard;
    profileBackground?: ProfileBackground;
    profileSkills?: ProfileSkills[];
    profileAccomplishments?: ProfileAccomplishments;
    profileInterests?: ProfileInterest[];
}