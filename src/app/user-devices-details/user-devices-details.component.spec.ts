import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDevicesDetailsComponent } from './user-devices-details.component';

describe('UserDevicesDetailsComponent', () => {
  let component: UserDevicesDetailsComponent;
  let fixture: ComponentFixture<UserDevicesDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDevicesDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserDevicesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
