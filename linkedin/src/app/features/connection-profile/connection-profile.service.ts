import { Injectable } from "@angular/core";
import { Account } from "./../../_model/account";
@Injectable({
  providedIn: "root"
})
export class ConnectionProfileService {
  currentAccountID: number;
  // {
  //     id: 1,
  //     firstName: "",
  //     lastName: "",
  //     position: "",
  //     imageURL: [""],
  //     connections: [
  //       {
  //         id: 10,
  //         firstName: "",
  //         lastName: "",
  //         position: "",
  //         imageURL: [""],
  //         pastConnection: false,
  //         about: [
  //           ""
  //         ]
  //       },
  //       {
  //         id: 6,
  //         firstName: "",
  //         lastName: "",
  //         position: "",
  //         workPlace: [
  //           {
  //             title: "",
  //             logoURL: [""]
  //           }
  //         ],
  //         pastConnection: false,
  //         about: [
  //           ""
  //         ]
  //       },
  //       {
  //         id: 25,
  //         firstName: "",
  //         lastName: "",
  //         position: ""
  //       }
  //     ],
  //     studyPlace: [
  //       {
  //         title: "",
  //         logoURL: [""],
  //         degree: "",
  //         fieldOfStudy: "",
  //         grade: "",
  //         startDate: "",
  //         endDate: ""
  //       },
  //       {
  //         title: "",
  //         logoURL: [""],
  //         degree: "",
  //         fieldOfStudy: "",
  //         grade: "",
  //         startDate: "",
  //         endDate: ""
  //       }
  //     ],
  //     workPlace: [
  //       {
  //         title: "",
  //         logoURL: [""],
  //         positionCom: "",
  //         country: "",
  //         startDate: "",
  //         endDate: "",
  //         type: ""
  //       },
  //       {
  //         title: "",
  //         logoURL: [""],
  //         positionCom: "",
  //         country: "",
  //         startDate: "",
  //         endDate: "",
  //         type: ""
  //       }
  //     ],
  //     volunteerExperience: [
  //       {
  //         title: "",
  //         logoURL: [""],
  //         position: "",
  //         type: "",
  //         startDate: "",
  //         endDate: ""
  //       },
  //       {
  //         title: "",
  //         logoURL: [""],
  //         position: "",
  //         type: "",
  //         startDate: "",
  //         endDate: ""
  //       }
  //     ],
  //     country: "",
  //     pastConnection: false,
  //     about: [
  //       ""
  //     ],
  //     skills: [
  //       {
  //         skillName: "",
  //         SkillID: 1,
  //         noEndorsements: 3,
  //         endorsers: [
  //           { endorserID: 16, endorserName: "", skillID: 1 },
  //           { endorserID: 20, endorserName: "Hady Hebat", skillID: 1 }
  //         ]
  //       },
  //       {
  //         skillName: "React FrameWork",
  //         SkillID: 2,
  //         noEndorsements: 10,
  //         endorsers: [
  //           { endorserID: 11, endorserName: "Ola Talaat", skillID: 2 },
  //           { endorserID: 17, endorserName: "Shady Abdelsalam", skillID: 2 }
  //         ]
  //       },
  //       {
  //         skillName: "JavaScript",
  //         SkillID: 3,
  //         noEndorsements: 5,
  //         endorsers: [
  //           { endorserID: 19, endorserName: "Omar Amin", skillID: 3 },
  //           { endorserID: 22, endorserName: "Ahmed Fathy", skillID: 3 }
  //         ]
  //       }
  //     ],
  //     intersts: [
  //       {
  //         title: "Valeo",
  //         logoURL: ["assets/images/valeo.jpg"],
  //         followersNo: 27000
  //       },
  //       {
  //         title: "Orange",
  //         logoURL: ["assets/images/orange.png"],
  //         followersNo: 30000
  //       },
  //       {
  //         title: "ITworx",
  //         logoURL: ["assets/images/itworx.png"],
  //         followersNo: 29000
  //       },
  //       {
  //         title: "Telecom",
  //         logoURL: ["assets/images/telecom.png"],
  //         followersNo: 50000
  //       },
  //       {
  //         title: "Etisalat",
  //         logoURL: ["assets/images/etisalatLogo.jpg"],
  //         followersNo: 40000
  //       },
  //       {
  //         title: "FlairsTech",
  //         logoURL: ["assets/images/flairstechLogo.png"],
  //         followersNo: 60000
  //       }
  //     ]
  //   }
}
