import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaejorinsComponent } from './maejorins.component';

describe('MaejorinsComponent', () => {
  let component: MaejorinsComponent;
  let fixture: ComponentFixture<MaejorinsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaejorinsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaejorinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
