import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinDepartementComponent } from './join-departement.component';

describe('JoinDepartementComponent', () => {
  let component: JoinDepartementComponent;
  let fixture: ComponentFixture<JoinDepartementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JoinDepartementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinDepartementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
