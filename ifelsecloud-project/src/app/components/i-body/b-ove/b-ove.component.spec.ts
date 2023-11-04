import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BOveComponent } from './b-ove.component';

describe('BOveComponent', () => {
  let component: BOveComponent;
  let fixture: ComponentFixture<BOveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BOveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BOveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
