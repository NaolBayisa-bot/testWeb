import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetIntouchSection } from './get-intouch-section';

describe('GetIntouchSection', () => {
  let component: GetIntouchSection;
  let fixture: ComponentFixture<GetIntouchSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetIntouchSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetIntouchSection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
