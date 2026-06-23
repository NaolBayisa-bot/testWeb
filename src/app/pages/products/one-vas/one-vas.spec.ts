import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneVas } from './one-vas';

describe('OneVas', () => {
  let component: OneVas;
  let fixture: ComponentFixture<OneVas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OneVas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OneVas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
