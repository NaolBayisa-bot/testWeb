import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentProjectSection } from './recent-project-section';

describe('RecentProjectSection', () => {
  let component: RecentProjectSection;
  let fixture: ComponentFixture<RecentProjectSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecentProjectSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecentProjectSection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
