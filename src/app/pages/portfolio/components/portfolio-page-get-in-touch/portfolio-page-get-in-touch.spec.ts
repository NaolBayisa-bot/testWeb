import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioPageGetInTouch } from './portfolio-page-get-in-touch';

describe('PortfolioPageGetInTouch', () => {
  let component: PortfolioPageGetInTouch;
  let fixture: ComponentFixture<PortfolioPageGetInTouch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioPageGetInTouch]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioPageGetInTouch);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
