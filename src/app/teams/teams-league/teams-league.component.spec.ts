import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamsLeagueComponent } from './teams-league.component';

describe('TeamsLeagueComponent', () => {
  let component: TeamsLeagueComponent;
  let fixture: ComponentFixture<TeamsLeagueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TeamsLeagueComponent]
    });
    fixture = TestBed.createComponent(TeamsLeagueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
