import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersDetailsAdminListComponent } from './users-details-admin-list.component';

describe('UsersDetailsAdminListComponent', () => {
  let component: UsersDetailsAdminListComponent;
  let fixture: ComponentFixture<UsersDetailsAdminListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersDetailsAdminListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersDetailsAdminListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
