import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { FamilyService } from './services/family.service';
import { RandomizerService } from './services/randomizer.service';
import { RulesService } from './services/rules.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{

constructor(
  private responsive: BreakpointObserver,
  private familyService: FamilyService,
  private randomizerService: RandomizerService,
  private rulesService: RulesService
  ) {

}

  ngOnInit(): void {

    this.responsive.observe([
      Breakpoints.WebLandscape,
      Breakpoints.HandsetPortrait 
    ])
      .subscribe(result => {
    
        const breakpoints = result.breakpoints;
        if (breakpoints[Breakpoints.WebLandscape]) {
          this.deviceType = "desktop";
        }
        else if (breakpoints[Breakpoints.HandsetPortrait]) {
          this.deviceType = "mobile";
        }
    
      });
  }
  title = 'Family Gift Picks';
  deviceType = 'desktop';
  family = '';

  families = [
    "Moen",
    "Kremer"
  ]

  getPicks: Diction

}
