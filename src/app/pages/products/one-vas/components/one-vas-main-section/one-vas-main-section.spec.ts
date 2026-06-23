import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneVasMainSection } from './one-vas-main-section';

describe('OneVasMainSection', () => {
  let component: OneVasMainSection;
  let fixture: ComponentFixture<OneVasMainSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OneVasMainSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OneVasMainSection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
