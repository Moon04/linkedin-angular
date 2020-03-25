import { Component, OnInit, Input } from '@angular/core';
import { ProfileDashboard } from 'src/app/_model/profileDashboard';
import { ProfileService } from './../../profile.service';

@Component({
  selector: 'app-dashboard-section',
  templateUrl: './dashboard-section.component.html',
  styleUrls: ['./dashboard-section.component.css']
})
export class DashboardSectionComponent implements OnInit {

  @Input() currentIndex;

  constructor(public profileService:ProfileService) { }

  ngOnInit(): void { }

}
