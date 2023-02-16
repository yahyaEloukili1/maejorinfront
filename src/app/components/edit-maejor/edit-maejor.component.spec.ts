import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMaejorComponent } from './edit-maejor.component';

describe('EditMaejorComponent', () => {
  let component: EditMaejorComponent;
  let fixture: ComponentFixture<EditMaejorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditMaejorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMaejorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
