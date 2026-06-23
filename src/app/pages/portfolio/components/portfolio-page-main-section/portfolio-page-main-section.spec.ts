import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioPageMainSection } from './portfolio-page-main-section';

describe('PortfolioPageMainSection', () => {
  let component: PortfolioPageMainSection;
  let fixture: ComponentFixture<PortfolioPageMainSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioPageMainSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioPageMainSection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
