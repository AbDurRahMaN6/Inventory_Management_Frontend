import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersAdminDetailsListComponent } from './users-admin-details-list.component';

describe('UsersAdminDetailsListComponent', () => {
  let component: UsersAdminDetailsListComponent;
  let fixture: ComponentFixture<UsersAdminDetailsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersAdminDetailsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersAdminDetailsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
