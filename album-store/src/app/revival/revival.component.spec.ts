import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevivalComponent } from './revival.component';

describe('RevivalComponent', () => {
  let component: RevivalComponent;
  let fixture: ComponentFixture<RevivalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RevivalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RevivalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
