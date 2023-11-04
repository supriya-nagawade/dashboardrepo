import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SStstComponent } from './s-stst.component';

describe('SStstComponent', () => {
  let component: SStstComponent;
  let fixture: ComponentFixture<SStstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SStstComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SStstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
