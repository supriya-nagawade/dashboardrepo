import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IBodyComponent } from './i-body.component';

describe('IBodyComponent', () => {
  let component: IBodyComponent;
  let fixture: ComponentFixture<IBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IBodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
