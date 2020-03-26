import { Component, OnInit, Input } from '@angular/core';
import { ProfileService } from './../../profile.service';

@Component({
  selector: 'app-dashboard-section',
  templateUrl: './dashboard-section.component.html',
  styleUrls: ['./dashboard-section.component.css']
})
export class DashboardSectionComponent implements OnInit {

  @Input() currentIndex: number;

  constructor(public profileService:ProfileService) { }

  ngOnInit(): void { }

}
