import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValittuComponent } from './valittu.component';

describe('ValittuComponent', () => {
  let component: ValittuComponent;
  let fixture: ComponentFixture<ValittuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValittuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValittuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
