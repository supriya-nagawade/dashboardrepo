import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavingPComponent } from './saving-p.component';

describe('SavingPComponent', () => {
  let component: SavingPComponent;
  let fixture: ComponentFixture<SavingPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavingPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SavingPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
