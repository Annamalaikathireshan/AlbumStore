import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FatherOfAsahdComponent } from './father-of-asahd.component';

describe('FatherOfAsahdComponent', () => {
  let component: FatherOfAsahdComponent;
  let fixture: ComponentFixture<FatherOfAsahdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FatherOfAsahdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FatherOfAsahdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
