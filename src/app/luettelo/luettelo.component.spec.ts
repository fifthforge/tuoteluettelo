import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LuetteloComponent } from './luettelo.component';

describe('LuetteloComponent', () => {
  let component: LuetteloComponent;
  let fixture: ComponentFixture<LuetteloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LuetteloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LuetteloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
