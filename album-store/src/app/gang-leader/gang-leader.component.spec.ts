import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GangLeaderComponent } from './gang-leader.component';

describe('GangLeaderComponent', () => {
  let component: GangLeaderComponent;
  let fixture: ComponentFixture<GangLeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GangLeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GangLeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
