import { Organization } from 'src/app/_model/organization';
import { ProfileInterest } from 'src/app/_model/profileInterest';
import { ProfileIntro } from 'src/app/_model/profileIntro';
import { ProfileAbout } from 'src/app/_model/profileAbout';
import { ProfileDashboard } from 'src/app/_model/profileDashboard';
import { ProfileBackground } from 'src/app/_model/profileBackground';
import { ProfileSkills } from 'src/app/_model/profileSkills';
import { ProfileAccomplishments } from 'src/app/_model/ProfileAccomplishments';



export class ProfileService{

    openContactInfoForm: boolean = false;
    openIntroForm: boolean = false;
    openAboutForm: boolean = false;
    openWorkExperienceForm: boolean = false;
    openEducationForm: boolean = false;
    openVolunteerExperienceForm: boolean = false;
    openSkillForm: boolean = false;
    openCourseForm: boolean = false;
    openProjectForm: boolean = false;
    openLanguageForm: boolean = false;
    openEditSkills: boolean = false;

    organizations: Organization [] = [
        {id: "0", title: "Pixels Egypt", logoURL: "assets/images/pixels.png", followersCount: 160, location: "Cairo, Cairo", type: "Company", cause: "Education Management" },
        {id: "1", title: "IEEE Helwan SB", logoURL: "assets/images/ieee.png", followersCount: 178, location: "Helwan, cairo", type: "Company"},
        {id: "2", title: "Information Technology Institute (ITI)", logoURL: "assets/images/itiLogo.png", followersCount: 34998, location: "Giza", type: "School"},
        {id: "3", title: "Helwan University Cairo", logoURL: "assets/images/helwan.png", followersCount: 97248, location: "Helwan, Cairo", type: "School"}
      ];

    interests: ProfileInterest [] =  [
        {interest: this.organizations[0]},
        {interest: this.organizations[1]},
        {interest: this.organizations[2]},
        {interest: this.organizations[3]},
        ];

    intro: ProfileIntro = {
        profilePhoto: "assets/images/profile-photo.jpg",
        firstName: "Mona",
        lastName: "Mohamed",
        headline: "Full Stack Developer",
        education: this.organizations[2],
        country: "Egypt",
        industry: "Computer Software",
        connectionsCount: 600,
        email: "sydeny254@gmail.com",
        address: "5 Elansary street, Elbahr Elaazm, Giza",
        birthday: "1996-04-25",
        phone: "0201156492345"
      };

    about: ProfileAbout = {
        about: "Looking for a challenging role in reputable organization to utilize my technical skills and enhance my knowledge about new technologies in the web development market."
      };

    dashboard: ProfileDashboard = {
        profileViews: 61,
        articleViews: 0,
        searchAppearance: 9
      };

    background: ProfileBackground = {
        workExperience: [],
        education: [
          {school: this.organizations[2], fieldOfStudy: "E-Business", startYear: "2019", endYear: "2020"},
          {school: this.organizations[3], degree: "Bachelor's degree", fieldOfStudy: "Computer Engineering", startYear: "2014", endYear: "2019", grade: "Good"}
        ],
        volunteerExperience: [
          {organization: this.organizations[1], role: "HR Volunteer", cause: "Science and Technology", startDate: "Sep 2016", endDate: "Aug 2017", description: "HR committee is concerned with the volunteers, the participants and the events"},
          {organization: this.organizations[1], role: "HR-TM Vice Director", cause: "Science and Technology", startDate: "Oct 2017", endDate: "Aug 2018", description: "HR-TM committee is concerned with the participants and the events."},
          {organization: this.organizations[0], role: " Academic Member", cause: "Education", startDate: "Oct 2017", endDate: "Sept 2018"},
          {organization: this.organizations[0], role: "Academic Head", cause: "Education", startDate: "Sept 2018", endDate: "Sept 2019"}
        ]
      };

    skills: ProfileSkills [] = [
        {id: 0, skillTitle: "C++", endorsements: ["Abdallah Ragab", "Moustafa Magdy"]},
        {id: 1, skillTitle: "Java", endorsements: ["Abdallah Ragab", "Moustafa Magdy"]},
        {id: 2, skillTitle: "Django Framework", endorsements: ["Mohamed Abo Alfotouh", "Abdallah Ragab", "Moustafa Magdy"]}
      ];

    accomplishments: ProfileAccomplishments = {
        courses: [{courseName: "Arduino"}, {courseName: "CSS"}, {courseName: "HTML"}, {courseName: "Python"}],
        projects: [],
        languages: [{language: "Arabic", proficiency: "Native or bilingual proficiency"}, {language: "English, Middle (1100-1500)"}]
      };


    constructor() { }
}