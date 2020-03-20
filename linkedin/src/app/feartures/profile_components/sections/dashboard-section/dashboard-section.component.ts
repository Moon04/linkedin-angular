import { Component, OnInit, Input } from '@angular/core';
import { ProfileDashboard } from 'src/app/_model/profileDashboard';

@Component({
  selector: 'app-dashboard-section',
  templateUrl: './dashboard-section.component.html',
  styleUrls: ['./dashboard-section.component.css']
})
export class DashboardSectionComponent implements OnInit {


  @Input() profileDashboard: ProfileDashboard;

  constructor() { }

  ngOnInit(): void {
  }

}
