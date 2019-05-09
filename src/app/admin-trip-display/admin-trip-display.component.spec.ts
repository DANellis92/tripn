import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTripDisplayComponent } from './admin-trip-display.component';

describe('AdminTripDisplayComponent', () => {
  let component: AdminTripDisplayComponent;
  let fixture: ComponentFixture<AdminTripDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminTripDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTripDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
