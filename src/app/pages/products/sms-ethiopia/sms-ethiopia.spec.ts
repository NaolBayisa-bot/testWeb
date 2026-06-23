import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmsEthiopia } from './sms-ethiopia';

describe('SmsEthiopia', () => {
  let component: SmsEthiopia;
  let fixture: ComponentFixture<SmsEthiopia>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmsEthiopia]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmsEthiopia);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
