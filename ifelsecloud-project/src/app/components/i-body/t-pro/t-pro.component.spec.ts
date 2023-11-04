import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TProComponent } from './t-pro.component';

describe('TProComponent', () => {
  let component: TProComponent;
  let fixture: ComponentFixture<TProComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TProComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
