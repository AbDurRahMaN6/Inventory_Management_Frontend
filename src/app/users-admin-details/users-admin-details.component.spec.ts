import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersAdminDetailsComponent } from './users-admin-details.component';

describe('UsersAdminDetailsComponent', () => {
  let component: UsersAdminDetailsComponent;
  let fixture: ComponentFixture<UsersAdminDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersAdminDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersAdminDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
