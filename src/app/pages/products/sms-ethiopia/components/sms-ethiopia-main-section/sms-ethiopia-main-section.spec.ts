import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmsEthiopiaMainSection } from './sms-ethiopia-main-section';

describe('SmsEthiopiaMainSection', () => {
  let component: SmsEthiopiaMainSection;
  let fixture: ComponentFixture<SmsEthiopiaMainSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmsEthiopiaMainSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmsEthiopiaMainSection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
