import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeleBus } from './tele-bus';

describe('TeleBus', () => {
  let component: TeleBus;
  let fixture: ComponentFixture<TeleBus>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeleBus]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeleBus);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
