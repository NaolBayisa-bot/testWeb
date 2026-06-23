import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsCoreSection } from './about-us-core-section';

describe('AboutUsCoreSection', () => {
  let component: AboutUsCoreSection;
  let fixture: ComponentFixture<AboutUsCoreSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutUsCoreSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutUsCoreSection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
