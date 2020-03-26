import { Organization } from 'src/app/_model/organization';
import { ProfileInterest } from 'src/app/_model/profileInterest';
import { ProfileIntro } from 'src/app/_model/profileIntro';
import { ProfileAbout } from 'src/app/_model/profileAbout';
import { ProfileDashboard } from 'src/app/_model/profileDashboard';
import { ProfileBackground } from 'src/app/_model/profileBackground';
import { ProfileSkills } from 'src/app/_model/profileSkills';
import { ProfileAccomplishments } from 'src/app/_model/ProfileAccomplishments';
import { Profile } from 'src/app/_model/profile';



export class ProfileService{

  
    organizations: Organization [] = [
      {id: "0", title: "Pixels Egypt", logoURL: "assets/images/pixels.png", followersCount: 160, location: "Cairo, Cairo", type: "Company", cause: "Education Management" },
      {id: "1", title: "IEEE Helwan SB", logoURL: "assets/images/ieee.png", followersCount: 178, location: "Helwan, cairo", type: "Company"},
      {id: "2", title: "Information Technology Institute (ITI)", logoURL: "assets/images/itiLogo.png", followersCount: 34998, location: "Giza", type: "School"},
      {id: "3", title: "Helwan University Cairo", logoURL: "assets/images/helwan.png", followersCount: 97248, location: "Helwan, Cairo", type: "School"}
    ];

    profiles: Profile [] = [
      {
        id: 0,
        openContactInfoForm: false,
        openIntroForm: false,
        openAboutForm: false,
        openWorkExperienceForm: false,
        openEducationForm: false,
        openVolunteerExperienceForm: false,
        openSkillForm: false,
        openCourseForm: false,
        openProjectForm: false,
        openLanguageForm: false,
        openEditSkills: false,

        profileIntro: {
          email: "mona@gmail.com",
          password: "Mona_12345",
          firstName: "Mona",
          lastName: "Mohamed",
          location: "Cairo",
          recentJob: "Web Developer",
          recentCompany: "IBM",
          college: "Bla",
          degree: "4",
          specialization: "CompyScience",
          startYear: "2015",
          endYear: "2019",
          profilePhoto: "assets/images/profile-photo.jpg",
          education: this.organizations[2],
          country: "Egypt",
          industry: "Computer Software",
          connectionsCount: 600,
          address: "5 Elansary street, Elbahr Elaazm, Giza",
          birthday: "1996-04-25",
          phone: "0201156492345"
        },

        profileAbout: {
          about: "Looking for a challenging role in reputable organization to utilize my technical skills and enhance my knowledge about new technologies in the web development market."
        },

        profileDashboard: {
          profileViews: 61,
          articleViews: 0,
          searchAppearance: 9
        },


        profileBackground: {
          workExperience: [],
          education: [
            {school: this.organizations[2], fieldOfStudy: "E-Business", startYear: "2019", endYear: "2020"},
            {school: this.organizations[3], degree: "Bachelor's degree", fieldOfStudy: "Computer Engineering", startYear: "2014", endYear: "2019", grade: "Good"}
          ],
          volunteerExperience: [
            {organization: this.organizations[1], role: "HR Volunteer", cause: "Science and Technology", startMonth: "September", startYear: 2017, endMonth: "August", endYear: 2017, description: "HR committee is concerned with the volunteers, the participants and the events"},
            {organization: this.organizations[1], role: "HR-TM Vice Director", cause: "Science and Technology", startMonth: "October", startYear: 2017, endMonth: "August", endYear: 2018, description: "HR-TM committee is concerned with the participants and the events."},
            {organization: this.organizations[0], role: " Academic Member", cause: "Education", startMonth: "October", startYear: 2017, endMonth: "August", endYear: 2018},
            {organization: this.organizations[0], role: "Academic Head", cause: "Education", startMonth: "September", startYear: 2017, endMonth: "August", endYear: 2019}
          ]
        },

        profileSkills: [
          {id: 0, skillTitle: "C++", endorsements: ["Abdallah Ragab", "Moustafa Magdy"]},
          {id: 1, skillTitle: "Java", endorsements: ["Abdallah Ragab", "Moustafa Magdy"]},
          {id: 2, skillTitle: "Django Framework", endorsements: ["Mohamed Abo Alfotouh", "Abdallah Ragab", "Moustafa Magdy"]}
        ],

        profileAccomplishments: {
          courses: [{courseName: "Arduino"}, {courseName: "CSS"}, {courseName: "HTML"}, {courseName: "Python"}],
          projects: [],
          languages: [{language: "Arabic", proficiency: "Native or bilingual proficiency"}, {language: "English, Middle (1100-1500)"}]
        },

        profileInterests: [
          {interest: this.organizations[0]},
          {interest: this.organizations[1]},
          {interest: this.organizations[2]},
          {interest: this.organizations[3]},
          ]
      },

      {
        id: 1,
        openContactInfoForm: false,
        openIntroForm: false,
        openAboutForm: false,
        openWorkExperienceForm: false,
        openEducationForm: false,
        openVolunteerExperienceForm: false,
        openSkillForm: false,
        openCourseForm: false,
        openProjectForm: false,
        openLanguageForm: false,
        openEditSkills: false,

        profileIntro: {
          email: "esraa@gmail.com",
          password: "Esraa_12345",
          firstName: "Esraa",
          lastName: "Elnaggar",
          location: "",
          recentJob: "Front End Developer",
          recentCompany: "IBM",
          college: "FLA",
          degree: "3.5",
          specialization: "infoCom",
          startYear: "2015",
          endYear: "2019",
          profilePhoto: "assets/images/profile-photo.jpg",
          education: this.organizations[2],
          country: "Egypt",
          industry: "Computer Software",
          connectionsCount: 400,
          address: "Alexandria",
          birthday: "1996-04-25",
          phone: "0201156492345"
        },

        profileAbout: {
          about: "Looking for a challenging role in reputable organization to utilize my technical skills and enhance my knowledge about new technologies in the web development market."
        },

        profileDashboard: {
          profileViews: 61,
          articleViews: 0,
          searchAppearance: 9
        },


        profileBackground: {
          workExperience: [],
          education: [
            {school: this.organizations[2], fieldOfStudy: "E-Business", startYear: "2019", endYear: "2020"},
            {school: this.organizations[3], degree: "Bachelor's degree", fieldOfStudy: "Computer Engineering", startYear: "2014", endYear: "2019", grade: "Good"}
          ],
          volunteerExperience: [
            {organization: this.organizations[1], role: "HR Volunteer", cause: "Science and Technology", startMonth: "September", startYear: 2017, endMonth: "January", endYear: 2017, description: "HR committee is concerned with the volunteers, the participants and the events"},
            {organization: this.organizations[1], role: "HR-TM Vice Director", cause: "Science and Technology", startMonth: "September", startYear: 2017, endMonth: "January", endYear: 2018, description: "HR-TM committee is concerned with the participants and the events."},
            {organization: this.organizations[0], role: " Academic Member", cause: "Education", startMonth: "September", startYear: 2017, endMonth: "January", endYear: 2018},
            {organization: this.organizations[0], role: "Academic Head", cause: "Education", startMonth: "September", startYear: 2017, endMonth: "January", endYear: 2019}
          ]
        },

        profileSkills: [
          {id: 0, skillTitle: "C++", endorsements: ["Abdallah Ragab", "Moustafa Magdy"]},
          {id: 1, skillTitle: "Java", endorsements: ["Abdallah Ragab", "Moustafa Magdy"]},
          {id: 2, skillTitle: "Django Framework", endorsements: ["Mohamed Abo Alfotouh", "Abdallah Ragab", "Moustafa Magdy"]}
        ],

        profileAccomplishments: {
          courses: [{courseName: "Arduino"}, {courseName: "CSS"}, {courseName: "HTML"}, {courseName: "Python"}],
          projects: [],
          languages: [{language: "Arabic", proficiency: "Native or bilingual proficiency"}, {language: "English, Middle (1100-1500)"}]
        },

        profileInterests: [
          {interest: this.organizations[0]},
          {interest: this.organizations[1]},
          {interest: this.organizations[2]},
          {interest: this.organizations[3]},
          ]
      }
    ] || JSON.parse(localStorage.getItem('users'));

    constructor() { }
}