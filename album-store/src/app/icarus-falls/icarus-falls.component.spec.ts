import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IcarusFallsComponent } from './icarus-falls.component';

describe('IcarusFallsComponent', () => {
  let component: IcarusFallsComponent;
  let fixture: ComponentFixture<IcarusFallsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IcarusFallsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IcarusFallsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
