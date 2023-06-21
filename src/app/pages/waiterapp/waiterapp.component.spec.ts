import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaiterappComponent } from './waiterapp.component';

describe('WaiterappComponent', () => {
  let component: WaiterappComponent;
  let fixture: ComponentFixture<WaiterappComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WaiterappComponent]
    });
    fixture = TestBed.createComponent(WaiterappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
