import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AletcloudMainSection } from './aletcloud-main-section';

describe('AletcloudMainSection', () => {
  let component: AletcloudMainSection;
  let fixture: ComponentFixture<AletcloudMainSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AletcloudMainSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AletcloudMainSection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
