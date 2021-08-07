import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavarasaComponent } from './navarasa.component';

describe('NavarasaComponent', () => {
  let component: NavarasaComponent;
  let fixture: ComponentFixture<NavarasaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavarasaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavarasaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
