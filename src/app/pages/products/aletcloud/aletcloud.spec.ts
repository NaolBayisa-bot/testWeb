import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aletcloud } from './aletcloud';

describe('Aletcloud', () => {
  let component: Aletcloud;
  let fixture: ComponentFixture<Aletcloud>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Aletcloud]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Aletcloud);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
