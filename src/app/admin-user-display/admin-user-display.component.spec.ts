import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUserDisplayComponent } from './admin-user-display.component';

describe('AdminUserDisplayComponent', () => {
  let component: AdminUserDisplayComponent;
  let fixture: ComponentFixture<AdminUserDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminUserDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUserDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
