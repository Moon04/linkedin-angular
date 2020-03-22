import { Component, OnInit, Input } from '@angular/core';
import { ProfileAbout } from 'src/app/_model/profileAbout';

@Component({
  selector: 'app-about-section',
  templateUrl: './about-section.component.html',
  styleUrls: ['./about-section.component.css']
})
export class AboutSectionComponent implements OnInit {

  @Input() profileAbout: ProfileAbout;

  openAboutForm: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
