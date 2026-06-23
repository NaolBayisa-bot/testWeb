import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeleBusMainSection } from './tele-bus-main-section';

describe('TeleBusMainSection', () => {
  let component: TeleBusMainSection;
  let fixture: ComponentFixture<TeleBusMainSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeleBusMainSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeleBusMainSection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
