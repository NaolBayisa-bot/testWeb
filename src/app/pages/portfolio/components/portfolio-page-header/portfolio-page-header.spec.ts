import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioPageHeader } from './portfolio-page-header';

describe('PortfolioPageHeader', () => {
  let component: PortfolioPageHeader;
  let fixture: ComponentFixture<PortfolioPageHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioPageHeader]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioPageHeader);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
