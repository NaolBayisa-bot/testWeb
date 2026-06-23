import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrowthSection } from './growth-section';

describe('GrowthSection', () => {
  let component: GrowthSection;
  let fixture: ComponentFixture<GrowthSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GrowthSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrowthSection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
