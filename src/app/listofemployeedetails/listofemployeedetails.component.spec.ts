import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListofemployeedetailsComponent } from './listofemployeedetails.component';

describe('ListofemployeedetailsComponent', () => {
  let component: ListofemployeedetailsComponent;
  let fixture: ComponentFixture<ListofemployeedetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListofemployeedetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListofemployeedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
