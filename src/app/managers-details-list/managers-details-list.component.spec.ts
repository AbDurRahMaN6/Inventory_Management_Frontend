import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagersDetailsListComponent } from './managers-details-list.component';

describe('ManagersDetailsListComponent', () => {
  let component: ManagersDetailsListComponent;
  let fixture: ComponentFixture<ManagersDetailsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagersDetailsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagersDetailsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
