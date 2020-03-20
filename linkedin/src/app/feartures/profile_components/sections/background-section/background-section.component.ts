import { Component, OnInit, Input } from '@angular/core';
import { ProfileBackground } from 'src/app/_model/profileBackground';

@Component({
  selector: 'app-background-section',
  templateUrl: './background-section.component.html',
  styleUrls: ['./background-section.component.css']
})
export class BackgroundSectionComponent implements OnInit {

  @Input() profileBackground: ProfileBackground;
  constructor() { }

  ngOnInit(): void {
  }

}
