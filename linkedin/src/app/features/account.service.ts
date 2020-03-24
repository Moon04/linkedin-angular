import { Injectable } from "@angular/core";
import { Account } from "./../_model/account";
import { WorkInfo } from "./../_model/work-info";
import { Title } from "@angular/platform-browser";

@Injectable({
  providedIn: "root"
})
export class AccountService {
  //currentAccount = Math.floor(Math.random() * 3 + 1);
  currentAccount = 0;

  // this.currentAccount;
  accounts: Account[] = [
    {
      id: 1,
      firstName: "Haidy",
      lastName: "Mohsen",
      position: "Full stack developer",
      imageURL: ["assets/images/1.jpg"],
      connections: [
        {
          id: 10,
          firstName: "Ahmed",
          lastName: "Amer",
          position: "java developer",
          imageURL: ["assets/images/1.jpg"],
          pastConnection: false,
          about: [
            "Java developer seeking an opportunity in a multi-national company to help me widen my knowledge and improve my skills"
          ]
        },
        {
          id: 6,
          firstName: "Fady",
          lastName: "Adly",
          position: "data scientist",
          workPlace: [
            {
              title: "Etisalat Misr",
              logoURL: ["assets/images/etisalatLogo.jpg"]
            }
          ],
          pastConnection: false,
          about: [
            "Mobile developer seeking an opportunity in a multi-national company to help me widen my knowledge and improve my skills"
          ]
        },
        {
          id: 25,
          firstName: "Ashraf",
          lastName: "Elshenawy",
          position: "BI Analyst"
        }
      ],
      studyPlace: [
        {
          title: "Information Technology Institute",
          logoURL: ["assets/images/itiLogo.png"],
          degree: "Diploma",
          fieldOfStudy: "web and UI",
          grade: "Distinct",
          startDate: "October 2019",
          endDate: "Present"
        },
        {
          title: "Ain shams University",
          logoURL: ["assets/images/Engineering.png"],
          degree: "Bachelor",
          fieldOfStudy: "Engineering",
          grade: "Very Good",
          startDate: "September 2014",
          endDate: "June 2019"
        }
      ],
      workPlace: [
        {
          title: "ITworx",
          logoURL: ["assets/images/itworxLogo.png"],
          positionCom: "Full stack developer",
          country: "Egypt",
          startDate: "Jan 2015",
          endDate: "Present",
          type: "Full time"
        },
        {
          title: "Flairs tech",
          logoURL: ["assets/images/flairstechLogo.png"],
          positionCom: "Front End developer",
          country: "Egypt",
          startDate: "Jan 2011",
          endDate: "Jan 2015",
          type: "Full time"
        }
      ],
      volunteerExperience: [
        {
          title: "ACES",
          logoURL: ["assets/images/aces.png"],
          position: "Academic Committee head",
          type: "Organization",
          startDate: "September 2014",
          endDate: "June 2019"
        },
        {
          title: "Meca",
          logoURL: ["assets/images/meca.png"],
          position: "Fund raising member",
          type: "Organization",
          startDate: "Jan 2011",
          endDate: "Jan 2015"
        }
      ],
      country: "Egypt",
      pastConnection: false,
      about: [
        "Full stack developer seeking an opportunity in a multi-national company to help me widen my knowledge and improve my skills"
      ],
      skills: [
        {
          skillName: "C++",
          SkillID: 1,
          noEndorsements: 3,
          endorsers: [
            { endorserID: 16, endorserName: "Weaam Wagdy", skillID: 1 },
            { endorserID: 20, endorserName: "Hady Hebat", skillID: 1 }
          ]
        },
        {
          skillName: "React FrameWork",
          SkillID: 2,
          noEndorsements: 10,
          endorsers: [
            { endorserID: 11, endorserName: "Ola Talaat", skillID: 2 },
            { endorserID: 17, endorserName: "Shady Abdelsalam", skillID: 2 }
          ]
        },
        {
          skillName: "JavaScript",
          SkillID: 3,
          noEndorsements: 5,
          endorsers: [
            { endorserID: 19, endorserName: "Omar Amin", skillID: 3 },
            { endorserID: 22, endorserName: "Ahmed Fathy", skillID: 3 }
          ]
        }
      ],
      intersts: [
        {
          title: "Valeo",
          logoURL: ["assets/images/valeo.jpg"],
          followersNo: 27000
        },
        {
          title: "Orange",
          logoURL: ["assets/images/orange.png"],
          followersNo: 30000
        },
        {
          title: "ITworx",
          logoURL: ["assets/images/itworx.png"],
          followersNo: 29000
        },
        {
          title: "Telecom",
          logoURL: ["assets/images/telecom.png"],
          followersNo: 50000
        },
        {
          title: "Etisalat",
          logoURL: ["assets/images/etisalatLogo.jpg"],
          followersNo: 40000
        },
        {
          title: "FlairsTech",
          logoURL: ["assets/images/flairstechLogo.png"],
          followersNo: 60000
        }
      ]
    },

    {
      id: 2,
      firstName: "Heba",
      lastName: "Hamdy",
      position: "student",
      imageURL: ["assets/images/2.jpg"],
      connections: [
        {
          id: 8,
          firstName: "Khaled",
          lastName: "Saleh",
          position: "student",
          imageURL: ["assets/images/1.jpg"],
          pastConnection: false,
          about: [
            ".net developer seeking an opportunity in a multi-national company to help me widen my knowledge and improve my skills"
          ]
        },
        {
          id: 4,
          firstName: "Nesma",
          lastName: "magdy",
          position: "ERP analyst",
          pastConnection: false
        }
      ],
      studyPlace: [
        { title: "Helwan", logoURL: ["assets/images/Engineering.png"] }
      ],
      workPlace: [{ title: "ITI", logoURL: ["assets/images/itiLogo.png"] }],
      country: "France",
      pastConnection: false,
      about: [
        ".net developer seeking an opportunity in a multi-national company to help me widen my knowledge and improve my skills"
      ]
    },
    {
      id: 3,
      firstName: "Adel",
      lastName: "Farag",
      position: "data analyst",
      imageURL: ["assets/images/3.jpg"],
      connections: [
        {
          id: 5,
          firstName: "Ahmed",
          lastName: "Amer",
          position: "android developer",
          imageURL: ["assets/images/1.jpg"],
          pastConnection: false,
          about: [
            "c# developer seeking an opportunity in a multi-national company to help me widen my knowledge and improve my skills"
          ]
        },
        {
          id: 9,
          firstName: "Nermeen",
          lastName: "Assem",
          position: "HR specialist",
          pastConnection: false
        }
      ],
      studyPlace: [
        { title: "Cairo", logoURL: ["assets/images/Engineering.png"] }
      ],
      workPlace: [
        { title: "ITworx", logoURL: ["assets/images/itworxLogo.png"] }
      ],
      country: "USA",
      pastConnection: false,
      about: [
        "mean stack developer seeking an opportunity in a multi-national company to help me widen my knowledge and improve my skills"
      ]
    }
  ];

  constructor() {}
}
