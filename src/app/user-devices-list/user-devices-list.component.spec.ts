import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDevicesListComponent } from './user-devices-list.component';

describe('UserDevicesListComponent', () => {
  let component: UserDevicesListComponent;
  let fixture: ComponentFixture<UserDevicesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDevicesListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserDevicesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
