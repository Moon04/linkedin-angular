import { Organization } from './organization';
import { DataRequire } from './../_models/data-require';

export interface ProfileIntro {

    basicInfo: DataRequire;
    profilePhoto?: string;
    education?: Organization;
    country?: string;
    industry?: string;
    connectionsCount?: Number;
    address?: string;
    birthday?: string;
    phone?: string;
}