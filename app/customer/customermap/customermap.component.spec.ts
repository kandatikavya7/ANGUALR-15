import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomermapComponent } from './customermap.component';

describe('CustomermapComponent', () => {
  let component: CustomermapComponent;
  let fixture: ComponentFixture<CustomermapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomermapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomermapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
