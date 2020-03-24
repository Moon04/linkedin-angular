import { Endorser } from "./endorser";
export interface Skill {
  skillName?: string;
  SkillID?: number;
  noEndorsements?: number;
  endorsers?: Endorser[];
}
